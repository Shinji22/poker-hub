import fs from 'fs';
import CryptoJS from 'crypto-js';

const Storage = (() => {
    //  const userDataPath = `${(electron.app || electron.remote.app).getPath('userData')}/config`;
    // const favoritefilename = 'favorites.json';

    const encrypt = s => {
        const wordArray = CryptoJS.enc.Utf8.parse(s);
        const b64 = CryptoJS.enc.Base64.stringify(wordArray);
        return b64;
    };

    const decrypt = s => {
        const parsedWordArray = CryptoJS.enc.Base64.parse(s);
        const parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
        return parsedStr;
    };

    /**
     * Sauvegarde du contenu dans un fichier
     * @param {string} filename
     * @param {string} content
     */
    const save = (path, content) => {
        fs.writeFileSync(path, content);
    };

    /**
     * Charge le contenu d'un fichier
     * @param {string} filename
     * @param {string} content
     */
    const load = path => {
        console.log(`load file : ${path}`);
        if (!fs.existsSync(path)) return null;
        const data = fs.readFileSync(path, 'utf8');
        console.log(data.length);
        if (data.length !== 0) {
            const json = JSON.parse(data);
            return json;
        }
        return {};
    };

    return {
        save,
        load,
    };
})();

export default Storage;
