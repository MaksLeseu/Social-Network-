import React, {FC} from "react";
import s from './Messages.module.css'
import {ChatMessages} from "./NestedComponents/ChatMessages/ChatMessages";
import {Dialogs} from "./NestedComponents/Dialogs/Dialogs";
import {DialogLogic} from "./DialogLogic/DialogLogic";
import {ChatLogic} from "./ChatLogic/ChatLogic";
import {MessagesPropsType} from "./MessagesContainer";
import {Navigate} from "react-router-dom";

type UsersMessagesElementType = {
    id: string
    message: string
}

export type DialogsDataElementsPropsType = {
    id: string
    name: string
}


export const Messages: FC<MessagesPropsType> = (props) => {

    let dialogsElement = props.state.dialogsData.map((el: DialogsDataElementsPropsType) =>
        <DialogLogic userName={el.name} id={el.id} /> );

    let usersMessagesElement = props.state.usersMessage.map((el: UsersMessagesElementType) =>
        <ChatLogic text={el.message} id={el.id}/> )

    return (
        <div className={s.messages}>
            <div className={s.messages__dialogs}>
                <Dialogs dialogsElement={dialogsElement} />
            </div>
            <div className={s.messages__chat}>
                <ChatMessages
                    usersMessagesElement={usersMessagesElement}
                    addMessageCallback={props.addMessageCallback}
                />
            </div>
        </div>
    )
}