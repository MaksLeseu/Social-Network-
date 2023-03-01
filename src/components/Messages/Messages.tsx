import React, {useState} from "react";
import s from './Messages.module.css'
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {Dialogs} from "./Dialogs/Dialogs";


export function Messages(props: any) {

    return (
        <div className={s.messages}>
            <div className={s.messages__dialogs}>
                <Dialogs dialogsElement={props.dialogsElement} />
            </div>
            <div className={s.messages__chat}>
                <MessagesItem usersMessagesElement={props.usersMessagesElement} />
            </div>
        </div>
    )
}