import React from 'react';
import shortid from 'shortid';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.inputId = shortid.generate();
    }

    render() {
        return (
            <div>
                <label className="el-switch" htmlFor={this.inputId}>
                    <input type="checkbox" name={this.props.name} defaultChecked={this.props.checked} onChange={this.props.onChange} id={this.inputId} />
                    <span className="el-switch-style" />
                </label>
            </div>
        );
    }
}
