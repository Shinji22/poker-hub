import React from 'react';
import { inject, observer } from 'mobx-react';

const Slider = inject('store')(observer(({ store }) => {

    const sliderChangeHandler = (e) => {
        let value = Number(e.target.value);
        if (Number.isNaN(value)) return;
        if (value > 20) value = 20;
        store.nash.setSliderValue(value);
    };

    return (
        <div className="nash-slider">
            <input type="range" step="0.1" onChange={sliderChangeHandler} min="0" max="20" value={store.nash.sliderValue} className="slider" />
            <input type="text" name="sliderValueText" value={store.nash.sliderValue} onChange={sliderChangeHandler} className="slider-input-value" />
        </div>
    );
}));

export default Slider;
