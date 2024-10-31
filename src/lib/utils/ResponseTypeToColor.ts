import { ResponseType } from "../interfaces/Response";
import { Colors, Color } from "../types/Colors";

export function ResponseTypeToColor(type:ResponseType):Color {
    switch(type) {
        case ResponseType.Danger:
            return Colors.Red
        case ResponseType.Success:
            return Colors.Green
        case ResponseType.Warning:
        default:
            return Colors.Yellow
    }
}