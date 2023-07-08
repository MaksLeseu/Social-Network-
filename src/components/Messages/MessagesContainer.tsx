import React from "react";
import {Messages} from "./Messages";
import {addMessageActionCreator, MessagesInitialStateType} from "../../Redux/messages-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {UsersInitialStateType} from "../../Redux/auth-reducer";

type MapStatePropsType = {
    state: MessagesInitialStateType
    isAuth: boolean
}
type MapDispatchPropsType = {
    addMessageCallback: (valueInput: string) => void
}
export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.messages,
        isAuth: state.auth['isAuth']
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessageCallback: (valueInput: string) => {
            dispatch(addMessageActionCreator(valueInput))
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
