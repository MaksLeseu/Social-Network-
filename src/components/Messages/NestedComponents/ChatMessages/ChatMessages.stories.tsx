import React from "react";
import {ChatMessages} from "./ChatMessages";
import {MessagesInitialStateType} from "../../../../Redux/messages-reducer";
import {ChatLogic} from "../../ChatLogic/ChatLogic";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Chat',
    component: ChatMessages
}

type UsersMessagesElementType = {
    id: string
    message: string
}

type UsersMessageType = {
    id: string
    message: string
}

type InitialStateType = {
    usersMessage: UsersMessageType[]
}

const callback = action('Message was sending')

export const Example1 = (props: any) => {

    let initialState: InitialStateType = {
        usersMessage: [
            {id: '1', message: 'Hi brother!'},
            {id: '2', message: 'Hi man!'},
            {id: '3', message: 'How are you?'},
            {id: '4', message: 'На девятов этаже('},
            {id: '2', message: 'Что там делаешь?'},
            {id: '5', message: 'Хочу выйти...'},
        ],
    }

    let usersMessagesElement = initialState.usersMessage.map((el: UsersMessagesElementType) =>
        <ChatLogic text={el.message} id={el.id}/> )

    return <ChatMessages
        usersMessagesElement={usersMessagesElement}
        addMessageCallback={callback}
        />
}

