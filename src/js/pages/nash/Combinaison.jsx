import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store') 
@observer 
export default class Combinaison extends React.Component {
    render(){
        return (
            <td className={this.props.classlist + ((this.props.value >= this.props.store.nash.sliderValue) ? ' selected' : '')}>{this.props.children}</td>
        );
    }
}
