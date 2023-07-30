import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import {sidebarRightReducer} from "./sidebarRigth-reducer";
import usersReducer from "./users-reducer";
import authReducer, {UsersInitialStateType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {appReducer} from "./app-reducer";

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

type StatusType = {
    type: 'SET_STATUS'
    status: string
}

type SetIsLoggedInAC = {
    type: 'SET_IS_LOGGED_IN'
    value: boolean
}

export type ActionsType = ContentAcType | MessagesAcType | FollowAcType | UnfollowAcType | SetUsersAcType
    | ProfileACType | SetAuthUserDataAC | DisableButtonType | StatusType | SetIsLoggedInAC

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messages: messagesReducer,
    sidebarRight: sidebarRightReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>

export default store;

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;