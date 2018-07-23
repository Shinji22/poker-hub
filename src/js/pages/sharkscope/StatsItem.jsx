import React from 'react';
import { inject, observer } from 'mobx-react';
import Highcharts from 'highcharts';
import shortid from 'shortid';
import Storage from '../../services/storage';

@inject('store')
@observer
export default class StatsItem extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;

        this.chartID = shortid.generate();

        if (this.props.player.stats.Ability < 60) this.abilityLevel = 'bad';
        else if (this.props.player.stats.Ability >= 60 && this.props.player.stats.Ability < 70) this.abilityLevel = 'medium';
        else this.abilityLevel = 'good';
        this.style = {
            left: `calc(${this.props.player.stats.ITM}% - 15px)`,
        };
    }

    componentDidMount() {
        if (this.makeChart) {
            this.makeChart();
        }
    }

    /**
     * Suppression d'un joueur
     */
    removePlayer = () => {
        this.store.sharkscope.removePlayer(this.props.player);
    };

    /**
     * Ajout / suppression du joueur dans la liste des favoris
     */
    favoriteHandler = () => {
        if (this.props.player.favorite !== undefined && this.props.player.favorite === true) {
            this.store.sharkscope.removeFavorite(this.props.player);
        } else {
            this.store.sharkscope.addFavorite(this.props.player);
        }
        console.log(this.store.sharkscope.favorites);
        Storage.save(this.store.global.filenames.favorite, JSON.stringify(this.store.sharkscope.favorites));
    };

    /**
     * Création du graphique
     */
    makeChart = () => {
        if (!this.props.player.chartData || this.props.player.chartData.length === 0) return;
        Highcharts.chart(this.chartID, {
            chart: {
                type: 'areaspline',
                backgroundColor: '#232838',
                marginTop: 20,
            },
            title: {
                text: null,
            },
            xAxis: {
                type: 'category',
                labels: {
                    style: {
                        color: '#aaa',
                    },
                },
            },
            yAxis: {
                title: {
                    text: null,
                },
                labels: {
                    align: 'left',
                    y: -4,
                    x: 0,
                    style: {
                        color: '#aaa',
                    },
                },
                maxPadding: 0,
            },
            plotOptions: {
                areaspline: {
                    animation: false,
                    color: '#00d1b2',
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#00d1b2'],
                            [
                                1,
                                Highcharts.Color('#00d1b2')
                                    .setOpacity(0)
                                    .get('rgba'),
                            ],
                        ],
                    },
                    negativeColor: '#ff3760',
                    negativeFillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [
                                0,
                                Highcharts.Color('#ff3760')
                                    .setOpacity(0)
                                    .get('rgba'),
                            ],
                            [1, '#ff3760'],
                        ],
                    },
                    fillOpacity: 0.4,
                    marker: {
                        enabled: false,
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1,
                        },
                    },
                },
            },
            legend: {
                enabled: false,
            },
            tooltip: {
                formatter() {
                    const date = new Date(this.point.date * 1000);
                    const html = `<div style="background">
                        <p style="margin-bottom: 25px">${date.toLocaleDateString()}</p><br/>
                        <span style="color:${this.color}">\u25CF</span> Profit: <b>${this.y}€</b>
                        </div>`;
                    return html;
                },
            },
            credits: {
                enabled: false,
            },
            series: [
                {
                    name: 'Profit',
                    data: this.props.player.chartData,
                },
            ],
        });
    };

    render() {
        return (
            <div className="stats-item">
                <div className={`ability ${this.abilityLevel}`}>{this.props.player.stats.Ability}</div>
                <h2>{this.props.player.pseudo}</h2>
                <h5>{this.props.player.network}</h5>
                <i className="material-icons md-light close-icon" onClick={this.removePlayer}>
                    close
                </i>
                <i className="material-icons md-light like-icon" onClick={this.favoriteHandler} title="Ajouter aux favoris">
                    {this.props.player.favorite !== undefined && this.props.player.favorite === true ? 'favorite' : 'favorite_border'}
                </i>

                {this.props.player.chartData && this.props.player.chartData.length > 0 ? <div className="chart" id={this.chartID} /> : <p className="no-chart">Aucune donnée à afficher</p>}

                <div className="stats-list">
                    <div className="stats with-percent">
                        <span className="stat-name">ITM</span>
                        <div className="stat-value">
                            <progress className="progress is-small percent" value={this.props.player.stats.ITM} max="100">
                                60%
                            </progress>
                            <span className="progress-min">0</span>
                            <span className="progress-max">100</span>
                            <span className="progress-value" style={this.style}>
                                {this.props.player.stats.ITM} %
                            </span>
                        </div>
                    </div>
                    <div className="stats">
                        <span className="stat-name">Parties</span>
                        <span className="stat-value">{this.props.player.stats.Count}</span>
                    </div>
                    <div className="stats">
                        <span className="stat-name">Mise moyenne</span>
                        <span className="stat-value">{this.props.player.stats.AvStake}€</span>
                    </div>
                    <div className="stats">
                        <span className="stat-name">ROI total</span>
                        <span className="stat-value">{this.props.player.stats.TotalROI}%</span>
                    </div>
                    <div className="stats">
                        <span className="stat-name">ROI moyen</span>
                        <span className="stat-value">{this.props.player.stats.AvROI}%</span>
                    </div>
                    <div className="stats">
                        <span className="stat-name">Profit total</span>
                        <span className="stat-value">{this.props.player.stats.Profit}€</span>
                    </div>
                    <div className="stats">
                        <span className="stat-name">Profit moyen</span>
                        <span className="stat-value">{this.props.player.stats.AvProfit}€</span>
                    </div>
                </div>
            </div>
        );
    }
}
