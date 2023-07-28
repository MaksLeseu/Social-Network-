import {Dispatch} from "redux";
import {setAppErrorAC} from "../Redux/app-reducer";


export const handleServerAppError = (data: any, dispatch: Dispatch) => {
    if (data.messages.length > 0) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error!'))
    }
}