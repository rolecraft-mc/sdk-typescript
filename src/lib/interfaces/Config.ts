import Version from "../types/Versions";

export interface Config {
    apiKey?: string,
    baseUrl: string,
    token?: string,
    version: Version,
    [args:string]: any
}
export default Config;