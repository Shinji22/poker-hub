import { observable, action } from 'mobx';

export class Route {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable current = { id: 'home', label: 'Accueil', icon: 'home' };
    @observable list = [{ id: 'home', label: 'Accueil', icon: 'home' }, { id: 'sharkscope', label: 'Sharkscope', icon: 'find_in_page' }, { id: 'nash', label: 'Tableaux de Nash', icon: 'assessment' }, { id: 'simulations', label: 'Simulations', icon: 'show_chart' }, { id: 'range', label: 'Range', icon: 'grid_on' }, { id: 'settings', label: 'Paramètres', icon: 'settings' }];

    @action
    setCurrent(value) {
        if (this.list.includes(value) && this.current !== value) {
            console.log(value);
            this.current = value;
        }
    }

    @observable sidebarExpanded = false;
    @action
    toggleSidebar(value) {
        if (value !== undefined) {
            this.sidebarExpanded = value;
        } else {
            this.sidebarExpanded = !this.sidebarExpanded;
        }
    }
}
