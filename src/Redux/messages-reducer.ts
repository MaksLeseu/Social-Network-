import {ActionType, DialogsDataType, PostsDataType, UsersMessageType} from "./store";

type StateType = {
    usersMessage: UsersMessageType[]
    dialogsData: DialogsDataType[]
}

type MessagesReducerType = (state: StateType, action: ActionType) => StateType

const ADD_MESSAGE: string = 'ADD-MESSAGE';

let initialState = {
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

const messagesReducer: MessagesReducerType = (state= initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, usersMessage:
                    [...state.usersMessage, {id: '5', message: action.message}]}

        default: return state
    }
}

export const addMessageActionCreator = (state: string) => ({type: ADD_MESSAGE, message: state})

export default messagesReducer