import React from 'react';
import shortid from 'shortid';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class IconSelector extends React.Component {
    constructor(props) {
        super(props);
        this.store = props.store;
        this.state = { isActive: false };
    }

    toggleActiveState = () => {
        if (this.setState({ isActive: !this.state.isActive }));
    };

    selectIcon = icon => {
        // this.store.sharkscope.setNewTabIcon(icon);
        this.setState({ isActive: false });
        this.props.onChange(icon);
    };

    render() {
        return (
            <div className={this.state.isActive ? 'dropdown is-right icon-selector is-active' : 'dropdown icon-selector is-right'}>
                <div className="dropdown-trigger">
                    <button className="button is-small" onClick={this.toggleActiveState} aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>{this.store.sharkscope.editedTab.icon ? <img src={this.store.sharkscope.editedTab.icon} alt="icon" /> : <i className="material-icons no-icon">clear</i>}</span>
                        <span className="icon is-small">
                            <i className="material-icons" aria-hidden="true">
                                arrow_drop_down
                            </i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a href="#" onClick={() => this.selectIcon(null)} key={shortid.generate()} className="dropdown-item">
                            <i className="material-icons no-icon">clear</i>
                        </a>
                        {this.store.soft.list.map(s => {
                            if (s.type === 'game') {
                                return (
                                    <a href="#" onClick={() => this.selectIcon(s.icon.icon32x32)} key={shortid.generate()} className="dropdown-item">
                                        <img src={s.icon.icon32x32} alt="icon" />
                                    </a>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
