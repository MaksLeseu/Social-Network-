import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import {sidebarRightReducer} from "./sidebarRigth-reducer";
import usersReducer from "./users-reducer";

type ContentAcType = {
    type: 'ADD-POST'
    message: string
}

type MessagesAcType = {
    type: 'ADD-MESSAGE'
    message: string
}

type FollowAcType = {
    type: 'FOLLOW'
    id: string
}

type UnfollowAcType = {
    type: 'UNFOLLOW'
    id: string
}

type SetUsersAcType = {
    type: 'SET_USERS'
    users: any
}

type ProfileACType = {
    type: 'SET_USERS_PROFILE'
    profile: any

}

export type ActionsType = ContentAcType | MessagesAcType | FollowAcType | UnfollowAcType | SetUsersAcType | ProfileACType

let reducers = combineReducers({
    profilePage: profileReducer,
    messages: messagesReducer,
    sidebarRight: sidebarRightReducer,
    users: usersReducer,
})

let store = createStore(reducers);

export type AppStateType = ReturnType<typeof reducers>

export default store;