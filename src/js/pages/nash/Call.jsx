import React from 'react';
import { inject, observer } from 'mobx-react';
import Combinaison from './Combinaison.jsx';
import Slider from './Slider.jsx';

const Call = inject('store')(
    observer(({ store }) => {
        return (
            <div className="call-tab">
                <table classlist="table is-bordered nash-table">
                    <tbody>
                        <tr>
                            <th>-</th>
                            <th>A</th>
                            <th>K</th>
                            <th>Q</th>
                            <th>J</th>
                            <th>T</th>
                            <th>9</th>
                            <th>8</th>
                            <th>7</th>
                            <th>6</th>
                            <th>5</th>
                            <th>4</th>
                            <th>3</th>
                            <th>2</th>
                        </tr>
                        <tr>
                            <th>A</th>
                            <Combinaison classlist="combi pp" value="20">
                                AA
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                AKs
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                AQs
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                AJs
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                ATs
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                A9s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                A8s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                A7s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                A6s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                A5s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                A4s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                A3s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                A2s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>K</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                AKo
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                KK
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                KQs
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                KJs
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                KTs
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                K9s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="17.6">
                                K8s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="15.2">
                                K7s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="14.3">
                                K6s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="13.2">
                                K5s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="12.1">
                                K4s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="11.4">
                                K3s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="10.7">
                                K2s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>Q</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                AQo
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                KQo
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                QQ
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                QJs
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                QTs
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="16.1">
                                Q9s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="13">
                                Q8s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="10.3">
                                Q7s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="9.9">
                                Q6s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="8.9">
                                Q5s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="8.4">
                                Q4s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="7.8">
                                Q3s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="7.2">
                                Q2s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>J</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                AJo
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                KJo
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="19.5">
                                QJo
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                JJ
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="18">
                                JTs
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="13.4">
                                J9s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="10.6">
                                J8s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="8.8">
                                J7s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="7">
                                J6s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="6.9">
                                J5s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="6.1">
                                J4s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="5.8">
                                J3s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="5.6">
                                J2s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>T</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                ATo
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                KTo
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                QTo
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                JTo
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                TT
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                T9s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                T8s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                T7s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                T6s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="11.9">
                                T5s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="10.5">
                                T4s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="7.7">
                                T3s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="6.5">
                                T2s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>9</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                A9o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                K9o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                Q9o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                J9o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                T9o
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                99
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                98s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                97s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                96s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="14.4">
                                95s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="6.9">
                                94s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="4.9">
                                93s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="3.7">
                                92s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>8</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                A8o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                K8o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                Q8o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="13.3">
                                J8o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="17.5">
                                T8o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="20">
                                98o
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                88
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                87s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                86s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="18.8">
                                85s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="10.1">
                                84s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="2.7">
                                83s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="2.5">
                                82s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>7</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                A7o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="16.1">
                                K7o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="10.3">
                                Q7o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="8.5">
                                J7o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="9">
                                T7o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="10.8">
                                97o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="14.7">
                                87o
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                77
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                76s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                75s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="13.9">
                                74s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="2.5">
                                73s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="2.1">
                                72s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>6</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                A6o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="15.1">
                                K6o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="9.6">
                                Q6o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="6.5">
                                J6o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="5.7">
                                T6o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="5.2">
                                96o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="7">
                                86o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="10.7">
                                76o
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                66
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                65s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="16.3">
                                64s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="-1">
                                63s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="2">
                                62s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>5</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                A5o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="14.2">
                                K5o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="8.9">
                                Q5o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="6">
                                J5o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="4.1">
                                T5o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="3.5">
                                95o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="3">
                                85o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="2.6">
                                75o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="2.4">
                                65o
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                55
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="20">
                                54s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="-1">
                                53s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="2">
                                52s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>4</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                A4o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="13.1">
                                K4o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="7.9">
                                Q4o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="5.4">
                                J4o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="3.8">
                                T4o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="2.7">
                                94o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="2.3">
                                84o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="2.1">
                                74o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="2">
                                64o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="2.1">
                                54o
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                44
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="-1">
                                43s
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="1.8">
                                42s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>3</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                A3o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="12.2">
                                K3o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="7.5">
                                Q3o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="5">
                                J3o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="3.4">
                                T3o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="2.5">
                                93o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.9">
                                83o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.8">
                                73o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.7">
                                63o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.8">
                                53o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.6">
                                43o
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                33
                            </Combinaison>
                            <Combinaison classlist="combi suited" value="1.7">
                                32s
                            </Combinaison>
                        </tr>
                        <tr>
                            <th>2</th>
                            <Combinaison classlist="combi offsuit" value="20">
                                A2o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="11.6">
                                K2o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="7">
                                Q2o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="4.6">
                                J2o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="2.9">
                                T2o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="2.2">
                                92o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.8">
                                82o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.6">
                                72o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.5">
                                62o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.5">
                                52o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.4">
                                42o
                            </Combinaison>
                            <Combinaison classlist="combi offsuit" value="1.4">
                                32o
                            </Combinaison>
                            <Combinaison classlist="combi pp" value="20">
                                22
                            </Combinaison>
                        </tr>
                    </tbody>
                </table>
                <Slider />
            </div>
        );
    })
);

export default Call;
