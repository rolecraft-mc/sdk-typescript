// Library
import { Response } from "../../lib/interfaces/Response"
// Resource
export interface PingResource {
    api:boolean,
    minecraft: {
        velocity: boolean,
        adventure: boolean,
        lobby: boolean
    }
}
// Response
export interface PingResponse<PingResource> {
    data:PingResource
}