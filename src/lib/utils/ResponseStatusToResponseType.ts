import { ResponseType } from "../interfaces/Response";

const status = {
    "200" : ResponseType.Success,
    "201" : ResponseType.Success,
    "202" : ResponseType.Success,
    "203" : ResponseType.Warning,
    "204" : ResponseType.Warning,
    "205" : ResponseType.Warning,
    "400" : ResponseType.Warning,
    "401" : ResponseType.Danger,
    "403" : ResponseType.Danger,
    "404" : ResponseType.Warning,
    "500" : ResponseType.Danger,
    "501" : ResponseType.Danger,
}

export type Status = keyof typeof status;

export function ResponseStatusToResponseType(s:Status):ResponseType {
    const value:ResponseType = status[s] ;
    return value ? value : ResponseType.Warning;
}

export default ResponseStatusToResponseType;