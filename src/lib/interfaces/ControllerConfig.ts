import Config from "./Config";
export interface ControllerConfig extends Config {
    endpoint:string,
    primary_key?:string,
    primary_value?:string|number
}