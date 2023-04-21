import React from "react";
import {Messages} from "./Messages";
import {addMessageActionCreator} from "../../Redux/messages-reducer";
import {ActionType, StoreType} from "../../Redux/store";
import {connect} from "react-redux";

type MessagesContainerPropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}

/*
export const MessagesContainer = (props: MessagesContainerPropsType) => {

    const addMessageCallback = (valueInput: string) => {
        props.dispatch(addMessageActionCreator(valueInput))
    }

    return (
        <Messages
            state={props.store.getState()}
            addMessageCallback={addMessageCallback}
        />
    )
}*/

let mapStateToProps = (state: any) => {
    return {
        state: state
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
