import React, {FC, useState} from "react";
import s from './Messages.module.css'
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {Dialogs} from "./Dialogs/Dialogs";
import {Dialog} from "./Dialogs/Dialog";
import {Chat} from "./MessagesItem/Chat";
import {MyPosts} from "../Posts/MyPosts/MyPosts";
import {ActionType, RootStateType} from "../../Redux/state";

type MessagesPropsType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}

export type DialogsDataElementsPropsType = {
    id: string
    name: string
}

type UsersMessagesElementType = {
    id: string
    message: string
}

export const Messages: FC<MessagesPropsType> = (props) => {

    let dialogsElement = props.state.messages.dialogsData.map((el: DialogsDataElementsPropsType) => <Dialog userName={el.name} id={el.id} /> );

    let usersMessagesElement = props.state.messages.usersMessage.map((el: UsersMessagesElementType) => <Chat text={el.message} id={el.id}/> )
    return (
        <div className={s.messages}>
            <div className={s.messages__dialogs}>
                <Dialogs dialogsElement={dialogsElement} />
            </div>
            <div className={s.messages__chat}>
                <MessagesItem usersMessagesElement={usersMessagesElement} dispatch={props.dispatch} />
            </div>
        </div>
    )
}