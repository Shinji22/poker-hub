import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';
import IconSelector from './IconSelector.jsx';
import SharkscopeTab from '../models/SharkscopeTab';

@inject('store')
@observer
export default class CreateTab extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    /**
     * Nettoyage des champs
     */
    cleanFields = () => {
        console.log('Clean fields');
    };

    /**
     * Fermeture de la modale
     */
    close = () => {
        this.store.sharkscope.showCreateTab(false);
        this.store.sharkscope.showEditTab(false);
    };

    /**
     * Ajout d'un onglet
     */
    addTab = () => {
        if (this.store.sharkscope.editTab) {
            this.store.sharkscope.updateTab();
        } else {
            this.store.sharkscope.addTab();
        }
        this.close();
    };

    /**
     * Ecouteur du changement de nom
     */
    handleNameChange = e => {
        const { target } = e;
        const t = this.store.sharkscope.editedTab;
        if (target.value.length < 12) {
            this.store.sharkscope.setEditedTab(new SharkscopeTab(t.id, target.value, t.icon));
        }
    };

    /**
     * Ecouteur du changement d'icon
     */
    handleIconChange = icon => {
        const t = this.store.sharkscope.editedTab;
        this.store.sharkscope.setEditedTab(new SharkscopeTab(t.id, t.name, icon));
    };

    render() {
        return (
            <div id="create-tab" className="modal is-active">
                <div className="modal-background" onClick={this.close} />
                <div className="modal-content">
                    <div className="create-tab-form">
                        <div className="field is-horizontal columns">
                            <div className="field-label column">
                                <label className="label">Icône</label>
                            </div>
                            <div className="field-body column is-narrow">
                                <div className="field">
                                    <div className="control">
                                        <IconSelector icon={this.store.sharkscope.editedTab.icon} onChange={this.handleIconChange} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal columns">
                            <div className="field-label column">
                                <label className="label">Nom</label>
                            </div>
                            <div className="field-body column is-narrow">
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-small" type="text" onChange={this.handleNameChange} value={this.store.sharkscope.editedTab.name} placeholder="Nom de l'onglet" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className={this.store.sharkscope.editedTab.name.length > 0 ? 'button is-small is-pulled-right' : 'button is-small is-pulled-right is-static'} onClick={this.addTab}>
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
