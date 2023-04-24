import {DialogsDataType, PostsDataType, UsersMessageType} from "./store";
import {ActionsType} from "./redux-store";

type StateType = {
    usersMessage: UsersMessageType[]
    dialogsData: DialogsDataType[]
}

type MessagesReducerType = (state: StateType, action: ActionsType) => StateType

type AddMessageActionCreatorType = (state: string) => ActionsType

/*const ADD_MESSAGE: string = 'ADD-MESSAGE';*/

let initialState: StateType = {
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

const messagesReducer: MessagesReducerType = (state= initialState, action): StateType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            return {...state, usersMessage:
                    [...state.usersMessage, {id: '5', message: action.message}]}

        default: return state
    }
}

export const addMessageActionCreator: AddMessageActionCreatorType = (state: string) => ({type: 'ADD-MESSAGE', message: state})

export default messagesReducer