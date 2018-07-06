import React from 'react';
import { inject, observer } from 'mobx-react';

const Random = inject('store')(
    observer(({ store }) => {
        const getRandom = () => {
            store.random.setValue(Math.round(Math.random() * 100));
        };

        return (
            <div className="tags has-addons random">
                <span className="tag is-medium value">{store.random.value}</span>
                <span onClick={getRandom} className="tag is-medium material-icons shuffle">
                    shuffle
                </span>
            </div>
        );
    })
);

export default Random;
