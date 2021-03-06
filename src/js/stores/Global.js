import { observable, action } from 'mobx';
import electron from 'electron';

export class Global {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    /** **************************************************************
     *
     *  Chemin d'accès aux fichiers nécessaires à l'app
     *
     ************************************************************** */
    @observable configPath = `${(electron.app || electron.remote.app).getPath('userData')}/config/`;

    @observable
    filenames = {
        configDefault: `../../resources/config.json`,
        configUser: `${this.configPath} config-user.json`,
        favorite: `${this.configPath} favorites.json`,
    };

    /** **************************************************************
     *
     *  Route utilisée au sein de l'application
     *
     ************************************************************** */
    @observable currentRoute = { id: 'home', label: 'Accueil', icon: 'home' };
    @observable routeList = [{ id: 'home', label: 'Accueil', icon: 'home' }, { id: 'sharkscope', label: 'Sharkscope', icon: 'find_in_page' }, { id: 'odds', label: 'Côtes', icon: 'local_atm' }, { id: 'nash', label: 'Tableaux de Nash', icon: 'assessment' }, { id: 'simulations', label: 'Simulations', icon: 'show_chart' }, { id: 'range', label: 'Range', icon: 'grid_on' }, { id: 'settings', label: 'Paramètres', icon: 'settings' }];

    @action
    setCurrentRoute(value) {
        if (this.routeList.includes(value) && this.currentRoute !== value) {
            this.currentRoute = value;
        }
    }

    @observable sidebarExpanded;
    @action
    toggleSidebar(value) {
        if (value !== undefined) {
            this.sidebarExpanded = value;
        } else {
            this.sidebarExpanded = !this.sidebarExpanded;
        }
    }

    @action
    setSidebarExpanded(v) {
        this.sidebarExpanded = v;
    }
}
