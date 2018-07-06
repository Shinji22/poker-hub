export default class SharkscopeAPI {
    constructor() {
        this.API_PATH = 'https://fr.sharkscope.com/poker-statistics';
        this.rangeFrom = [0, 0, 0, 0];
        this.rangeTo = [255, 255, 255, 255];
    }

    getIP() {
        const ip = [];
        const rangeFromMap = this.rangeFrom.map(octet => parseInt(octet, 10));
        const rangeToMap = this.rangeTo.map(octet => parseInt(octet, 10));

        for (let i = 0; i < 4; i += 1) {
            ip[i] = Math.floor(Math.random() * (rangeToMap[i] - rangeFromMap[i] + 1) + rangeFromMap[i]);
        }
        return ip.join('.');
    }

    // https://fr.sharkscope.com/poker-statistics/networks/PokerStars(FR-ES)/players/poker/suggestions?limit=15
    searchPlayer(text, network) {
        const url = `${this.API_PATH}/networks/${network}/players/${text}/suggestions?limit=12`;
        const successCallback = e => {
            return e.json();
        };
        const errorCallback = err => {
            console.log(`Error: ${err}`);
            return null;
        };
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        return fetch(url, { headers }).then(successCallback, errorCallback);
    }

    // https://fr.sharkscope.com/poker-statistics/networks/PokerStars(FR-ES)/players/Dolyla?&Currency=EUR
    getStats(pseudo, network) {
        const url = `${this.API_PATH}/networks/${network}/players/${pseudo}?&Currency=EUR`;
        const ip = this.getIP();

        const successCallback = e => {
            return e.json();
        };
        const errorCallback = err => {
            console.log(`Error: ${err}`);
            return null;
        };
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Forwarded-For': ip,
            'Client-Ip': ip,
            Via: ip,
            'X-Real-IP': ip,
        };
        return fetch(url, { headers }).then(successCallback, errorCallback);
    }

    formatStatsResponse(res) {
        if (res.Response && res.Response['@success'] !== undefined && res.Response['@success'] === 'true' && res.Response.PlayerResponse && res.Response.PlayerResponse.PlayerView && res.Response.PlayerResponse.PlayerView.Player && res.Response.PlayerResponse.PlayerView.Player.Statistics && res.Response.PlayerResponse.PlayerView.Player.Statistics.Statistic) {
            const originalStats = res.Response.PlayerResponse.PlayerView.Player.Statistics.Statistic;
            const stats = {};
            originalStats.forEach(s => {
                if (s['@authorized'] && s['@authorized'] === 'false') {
                    stats[s['@id']] = ' - ';
                } else {
                    stats[s['@id']] = s.$;
                }
            });
            return stats;
        }
        return null;
    }

    formatChartData(data) {
        const res = [];
        if (data.Response && data.Response['@success'] !== undefined && data.Response['@success'] === 'true' && data.Response.PlayerResponse && data.Response.PlayerResponse.PlayerView && data.Response.PlayerResponse.PlayerView.Player && data.Response.PlayerResponse.PlayerView.Player.Statistics && data.Response.PlayerResponse.PlayerView.Player.Statistics.StatisticalDataSet) {
            const statisticalDataSet = data.Response.PlayerResponse.PlayerView.Player.Statistics.StatisticalDataSet.find(a => a['@id'] === 'ByGame');
            if (statisticalDataSet && statisticalDataSet.Data) {
                const originalData = statisticalDataSet.Data;
                let dataX;
                let dataY;
                let cumul = 0;
                originalData.forEach((d, i) => {
                    dataX = d.Y.find(y => y['@id'] === 'FirstDate');
                    dataY = d.Y.find(y => y['@id'] === 'Profit');
                    cumul += Number(dataY.$);
                    cumul = Math.round(cumul * 100) / 100;
                    res.push({
                        x: i, // Number(dataX['$']),
                        y: cumul,
                        date: Number(dataX.$),
                    });
                });
            }
        }
        return res;
    }
}
