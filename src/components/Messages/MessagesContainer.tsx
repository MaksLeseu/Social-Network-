import React from "react";
import {Messages} from "./Messages";
import {addMessageActionCreator} from "../../Redux/messages-reducer";
import {ActionType} from "../../Redux/store";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        state: state.messages
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addMessageCallback: (valueInput: string) => {
            dispatch(addMessageActionCreator(valueInput))
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
