import React from 'react';
import { inject, observer } from 'mobx-react';

const Settings = inject('store')(observer(({ store }) => {
    return (
        <p>Settings</p>
    );
}));

export default Settings;
