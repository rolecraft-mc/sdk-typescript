// Library
import Config from "./lib/interfaces/Config";
import { ControllerConfig } from "./lib/interfaces/ControllerConfig";
import defaultConfig from "./lib/defaults/defaultConfig";
// Controllers
import { PingController } from "./lib/controllers/PingController";

////////////
// Client //
////////////

export class Client {

    private config:Config;
    constructor(config?:Config) {
        this.config = config ? config : defaultConfig;
    }

    private getControllerConfig(endpoint:string, primary_value?:string|number, primary_key:string = 'id'):ControllerConfig {
        return {
            ...this.config,
            endpoint: endpoint,
            primary_key: primary_key,
            primary_value: primary_value,
        } as ControllerConfig;
    }

    /////////////////
    // Controllers //
    /////////////////

    public Ping():PingController { return new PingController(this.getControllerConfig('/ping', 0)); };

}

export default new Client;