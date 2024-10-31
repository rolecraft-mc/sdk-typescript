// Axios
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
// Library
import { ControllerConfig } from './interfaces/ControllerConfig';
import RequestMethod, { RequestMethods } from './types/RequestMethods';
import { Response, ResponseType } from './interfaces/Response';
// Utilities
import Color, { Colors } from './types/Colors';
import { ResponseTypeToColor } from './utils/ResponseTypeToColor';
import { ResponseStatusToResponseType, Status } from './utils/ResponseStatusToResponseType';

// Controller
export class Controller {

    ///////////
    // Setup //
    ///////////

    private config: ControllerConfig;
    private axios: AxiosInstance;

    /**
     * Initializes the Controller with the given configuration.
     * @param config - The configuration object containing base URL, version and API Key.
     */
    constructor(config: ControllerConfig) {
        this.config = config;
        this.axios = axios.create({
            baseURL: `${this.config.baseUrl}/${this.config.version}`
        });
        if (this.config.apiKey) { this.setApiKey(this.config.apiKey); }
        if (this.config.token) { this.setToken(this.config.token); }
    }
    
    ///////////
    // Axios //
    ///////////

    /**
     * Sends an HTTP request using the configured Axios instance.
     * @param method The HTTP method (e.g., GET, POST, PATCH).
     * @param params The query parameters for the request.
     * @param data The request payload for POST, PUT, PATCH requests.
     * @returns A Promise that resolves to a Response object with details of the Axios request and response status.
     */
    public async send(method: RequestMethod = RequestMethods.Get, params = null, data = null): Promise<Response> {
        const headers: AxiosRequestConfig['headers'] = {
            "Content-Type": "application/json"
        };
        return this.axios.request({
            method: method,
            url: `${this.config.endpoint}`,
            headers: headers,
            params: params,
            data: data
        }).then((r: AxiosResponse) => {
            const responseType: ResponseType = ResponseStatusToResponseType(r.status.toString() as Status);
            const responseColor: Color = ResponseTypeToColor(responseType);
            const response: Response<any> = {
                axios: r,
                color: responseColor,
                data: r.data,
                error: false,
                status: r.status,
                type: responseType,
            };
            return response;
        }).catch((error: AxiosError) => {
            const response: Response<any> = {
                axios: error,
                color: Colors.Red,
                data: [],
                error: true,
                status: error.response?.status ? error.response?.status : 0,
                type: ResponseType.Danger
            };
            return response;
        });
    }

    ////////////////////
    // Authentication //
    ////////////////////

    /**
     * Sets the API key for authenticated requests.
     * @param apiKey The API key to be used in requests.
     * @returns {Controller} The current Controller
     */
    public setApiKey(apiKey?: string):Controller {
        if (apiKey) {
            this.config.apiKey = apiKey;
            this.axios.defaults.headers['X-API-KEY'] = `${this.config.apiKey}`;
        } else {
            this.config.apiKey = undefined;
            delete this.axios.defaults.headers['X-API-KEY'];
        }
        return this;
    }

    /**
     * Sets the Bearer token for authorization in requests.
     * @param token The authorization token to be used in requests.
     * @returns {Controller} The current Controller
     */
    public setToken(token?: string):Controller {
        if (token) {
            this.config.token = token;
            this.axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        } else {
            this.config.token = undefined;
            delete  this.axios.defaults.headers['Authorization'];
        }
        return this;
    }

}

export default Controller;
