import { AxiosError, AxiosResponse } from "axios";
import { Color } from "../types/Colors";

export interface Response<D=any> {
    axios:AxiosResponse|AxiosError,
    color?:Color,
    data:D,
    error:boolean,
    status:number,
    type:ResponseType,
}

export enum ResponseType {
    Danger = 'danger',
    Success = 'success',
    Warning = 'warning'
}

