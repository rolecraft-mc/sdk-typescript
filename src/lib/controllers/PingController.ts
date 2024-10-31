// Library
import { Controller } from "../Controller";
import { RequestMethods } from "../types/RequestMethods";
import { Response } from "../interfaces/Response";
import { PingResource } from "../../api/resources/PingResource";
// Controller
export class PingController extends Controller {

    public async get():Promise<Response<PingResource>|Response<any>> {
        const response = await this.send(RequestMethods.Get);
        if (!response.error) { return response as Response<PingResource> }
        return response as Response<any>;
    }

}