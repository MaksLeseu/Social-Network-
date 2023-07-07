import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import {sidebarRightReducer} from "./sidebarRigth-reducer";
import usersReducer from "./users-reducer";
import authReducer, {UsersInitialStateType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

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

type DisableButtonType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    id: string
}

type SetAuthUserDataAC = {
    type: 'SET_AUTH_USER_DATA'
    data: UsersInitialStateType
}

export type ActionsType = ContentAcType | MessagesAcType | FollowAcType | UnfollowAcType | SetUsersAcType | ProfileACType | SetAuthUserDataAC | DisableButtonType

let reducers = combineReducers({
    profilePage: profileReducer,
    messages: messagesReducer,
    sidebarRight: sidebarRightReducer,
    users: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof reducers>

export default store;