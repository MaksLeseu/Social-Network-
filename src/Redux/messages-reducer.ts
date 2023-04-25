import {ActionsType} from "./redux-store";

type DialogsDataType = {
    id: string
    name: string
}
type UsersMessageType = {
    id: string
    message: string
}

export type MessagesInitialStateType = {
    usersMessage: UsersMessageType[]
    dialogsData: DialogsDataType[]
}

type MessagesReducerType = (state: MessagesInitialStateType, action: ActionsType) => MessagesInitialStateType

type AddMessageActionCreatorType = (state: string) => ActionsType

let initialState: MessagesInitialStateType = {
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

const messagesReducer: MessagesReducerType = (state= initialState, action): MessagesInitialStateType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            return {...state, usersMessage:
                    [...state.usersMessage, {id: '5', message: action.message}]}

        default: return state
    }
}

export const addMessageActionCreator: AddMessageActionCreatorType = (state: string) => ({type: 'ADD-MESSAGE', message: state})

export default messagesReducer