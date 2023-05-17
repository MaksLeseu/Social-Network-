import React from "react";
import {DialogsDataElementsPropsType, Messages} from "./Messages";
import {action} from "@storybook/addon-actions";
import {ChatLogic} from "./ChatLogic/ChatLogic";
import {ChatMessages} from "./NestedComponents/ChatMessages/ChatMessages";
import {DialogLogic} from "./DialogLogic/DialogLogic";
import {BrowserRouter} from "react-router-dom";
import {Dialogs} from "./NestedComponents/Dialogs/Dialogs";

export default {
    title: 'Messages',
    component: Messages
}

const initialState = {
    usersMessage: [
        {id: '1', message: 'Hi brother!'},
        {id: '2', message: 'Hi man!'},
        {id: '3', message: 'How are you?'},
        {id: '4', message: 'На девятов этаже('},
        {id: '2', message: 'Что там делаешь?'},
        {id: '5', message: 'Хочу выйти...'},
    ],
    dialogsData: [
        {id: '1', name: 'Nik Filman'},
        {id: '2', name: 'Mich Filman'},
        {id: '3', name: 'Vera Filmana'},
        {id: '4', name: 'Vik Prigozin'},
    ],
}

const callback = action('Message was sending')

export const Example1 = () => {
    return (
        <BrowserRouter>
            <Messages state={initialState} addMessageCallback={callback} />
        </BrowserRouter>
    )
}


export const Example2 = (props: any) => {

    let usersMessagesElement = initialState.usersMessage.map((el) =>
        <ChatLogic text={el.message} id={el.id}/> )

    return <ChatMessages
        usersMessagesElement={usersMessagesElement}
        addMessageCallback={callback}
    />
}

export const Example3 = (props: any) => {

    let dialogsElement = initialState.dialogsData.map((el: DialogsDataElementsPropsType) =>
        <DialogLogic userName={el.name} id={el.id} /> );

    return (
        <BrowserRouter>
            <Dialogs dialogsElement={dialogsElement} />
        </BrowserRouter>
    )
}