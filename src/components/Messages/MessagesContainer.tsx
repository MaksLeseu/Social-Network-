import React from "react";
import {Messages} from "./Messages";
import {addMessageActionCreator, MessagesInitialStateType} from "../../Redux/messages-reducer";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    state: MessagesInitialStateType
}
type MapDispatchPropsType = {
    addMessageCallback: (valueInput: string) => void
}
export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.messages
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
