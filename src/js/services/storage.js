import fs from 'fs';

const Storage = (() => {
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
        if (!fs.existsSync(path)) return null;
        const data = fs.readFileSync(path, 'utf8');
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
