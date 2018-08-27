import React from 'react';
import Highcharts from 'highcharts';

class Odds extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pot: '', bet: '', outs: '', actionFlop: '', actionTurn: '' };
    }

    /**
     * Calcul des côtes
     */
    getOdds = () => {
        let matchError = false;
        if (this.state.pot === 0 || Number.isNaN(this.state.pot) || this.state.pot.length === 0) {
            matchError = true;
        }
        if (this.state.bet === 0 || Number.isNaN(this.state.bet) || this.state.bet.length === 0) {
            matchError = true;
        }
        if (this.state.outs === 0 || Number.isNaN(this.state.outs) || this.state.outs.length === 0) {
            matchError = true;
        }
        if (matchError) return;
        const potOdds = 100 * Number(this.state.bet) / (Number(this.state.pot) + Number(this.state.bet));
        const flopOdds = 100 * (this.state.outs / 47 + (1 - this.state.outs / 47) * (this.state.outs / 46));
        const turnOdds = 100 * this.state.outs / 46;
        const actionFlop = flopOdds >= potOdds ? 'CALL' : 'FOLD';
        const actionTurn = turnOdds >= potOdds ? 'CALL' : 'FOLD';
        this.setState({ actionFlop, actionTurn });

        const chartCategories = ['Côte au pot', 'Flop', 'Turn'];
        const chartData = [
            {
                name: 'Côte au pot',
                data: [potOdds, flopOdds, turnOdds],
                color: '#9710F0',
            },
        ];
        this.makeChart(chartData, chartCategories);
    };

    makeChart = (data, cat) => {
        console.log('makeChart', data, cat);
        Highcharts.chart('odds-chart', {
            chart: {
                type: 'bar',
                backgroundColor: 'transparent',
            },
            title: {
                text: ' ',
            },

            xAxis: {
                type: 'category',
                categories: cat,
                title: {
                    text: null,
                },
                lineWidth: 0,
                gridLineWidth: 0,
                tickWidth: 0,
                labels: {
                    style: {
                        color: '#fff',
                    },
                },
            },
            yAxis: {
                min: 0,
                max: 100,
                title: {
                    text: null,
                },
                lineWidth: 0,
                gridLineWidth: 0,
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    pointWidth: 25,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        formatter() {
                            const odd = `(${Number(100 / this.y - 1).toFixed(1)}:1)`;
                            return `${this.y.toFixed(1)}% ${odd}`;
                        },
                        style: {
                            color: '#fff',
                            textOutline: 'none',
                            fontWeight: 'normal',
                        },
                    },
                },
            },
            legend: {
                enabled: false,
            },

            credits: {
                enabled: false,
            },
            series: data,
        });
    };

    potInputHandler = e => {
        if (e.target.value.length > 0 && Number.isNaN(e.target.value)) return;
        this.setState({ pot: e.target.value });
    };

    betInputHandler = e => {
        if (e.target.value.length > 0 && Number.isNaN(e.target.value)) return;
        this.setState({ bet: e.target.value });
    };

    outsInputHandler = e => {
        if (e.target.value.length > 0 && Number.isNaN(e.target.value)) return;
        this.setState({ outs: e.target.value });
    };

    render() {
        return (
            <div className="odds">
                <form className="odds-form" onSubmit={this.getOdds}>
                    <div className="field is-horizontal">
                        <div className="field-label is-small">
                            <label className="label">Taille du pot</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-small" type="text" value={this.state.pot} onChange={this.potInputHandler} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-small">
                            <label className="label">Mise</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-small" type="text" value={this.state.bet} onChange={this.betInputHandler} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-small">
                            <label className="label">Nombre d'outs</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-small" type="text" value={this.state.outs} onChange={this.outsInputHandler} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label" />
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <button className="button is-primary is-small">Calculer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div id="odds-chart" />
                <div id="odds-action">
                    <div className={this.state.actionFlop === 'CALL' ? 'tag is-primary' : 'tag is-danger'}>{this.state.actionFlop}</div>
                    <div className={this.state.actionTurn === 'CALL' ? 'tag is-primary' : 'tag is-danger'}>{this.state.actionTurn}</div>
                </div>
            </div>
        );
    }
}

export default Odds;
