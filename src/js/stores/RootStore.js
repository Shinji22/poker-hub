import * as mobx from 'mobx';

import { Route } from './Route';
import { Network } from './Network';
import { Sharkscope } from './Sharkscope';
import { Nash } from './Nash';
import { Random } from './Random';
import { Home } from './Home';
import { Global } from './Global';

export default class RootStore {
    constructor() {
        // this.route = new Route(this);
        this.network = new Network(this);
        this.sharkscope = new Sharkscope(this);
        this.nash = new Nash(this);
        this.random = new Random(this);
        this.home = new Home(this);
        this.global = new Global(this);
    }
}
