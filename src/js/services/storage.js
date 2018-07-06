import electron from 'electron';
import fs from 'fs';
import CryptoJS from 'crypto-js';

const Storage = (() => {
    const userDataPath = `${(electron.app || electron.remote.app).getPath(
        'userData'
    )}/favorites`;
    const filename = 'db.json';

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
     * Crée le répertoire de sauvegarde s'il n'existe pas
     */
    const validDir = () => {
        const dirExists = fs.existsSync(userDataPath);
        if (!dirExists) {
            fs.mkdirSync(userDataPath);
        }
    };

    /**
     * Sauvegarde du contenu dans un fichier
     * @param {string} filename
     * @param {string} content
     */
    const save = content => {
        validDir();
        const path = `${userDataPath}/${filename}`;
        fs.writeFileSync(path, content);
    };

    /**
     * Charge le contenu d'un fichier
     * @param {string} filename
     * @param {string} content
     */
    const load = () => {
        validDir();
        const path = `${userDataPath}/${filename}`;
        if (!fs.existsSync(path)) return null;
        const data = fs.readFileSync(path, 'utf8');

        const json = JSON.parse(data);
        console.log(json);
        return json;
    };

    return {
        save,
        load,
    };
})();

export default Storage;
