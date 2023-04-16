import {ActionType, DialogsDataType, PostsDataType, UsersMessageType} from "./state";

type StateType = {
    usersMessage: UsersMessageType[]
    dialogsData: DialogsDataType[]
}

type MessagesReducerType = (state: StateType, action: ActionType) => StateType

const ADD_MESSAGE: string = 'ADD-MESSAGE';

const messagesReducer: MessagesReducerType = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            state.usersMessage.push(
                {id: '5', message: action.message}
            )
            return state
        default: return state
    }
}

export const addMessageActionCreator = (state: string) => ({type: ADD_MESSAGE, message: state})

export default messagesReducer