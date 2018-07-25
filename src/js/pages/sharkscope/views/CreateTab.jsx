import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class CreateTab extends React.Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = { name: '' };
    }

    close = () => {
        this.store.sharkscope.showCreateTab(false);
    };

    addTab = () => {
        this.store.sharkscope.addTab(this.state.name);
        this.close();
    };

    handleNameChange = e => {
        const { target } = e;
        if (target.value.length < 12) {
            this.setState({ name: target.value });
        }
    };

    render() {
        return (
            <div id="create-tab" className={this.store.sharkscope.createTab ? 'modal is-active' : 'modal'}>
                <div className="modal-background" onClick={this.close} />
                <div className="modal-content">
                    <div className="create-tab-form">
                        <div className="field is-horizontal columns">
                            <div className="field-label column">
                                <label className="label">Nom</label>
                            </div>
                            <div className="field-body column is-narrow">
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-small" type="text" onChange={this.handleNameChange} value={this.state.name} placeholder="Nom de l'onglet" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="button is-small is-pulled-right" onClick={this.addTab}>Ajouter</button>
                    </div>
                </div>
            </div>
        );
    }
}
