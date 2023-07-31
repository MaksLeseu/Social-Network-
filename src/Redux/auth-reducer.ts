import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {LoginInType} from "../components/Login/Login";
import {handleServerAppError} from "../common/error-utils";
import {setAppErrorAC} from "./app-reducer";

export type UsersInitialStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type AuthReducerType = (state: UsersInitialStateType, action: ActionsType) => UsersInitialStateType

let initialState: UsersInitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer: AuthReducerType = (state: UsersInitialStateType = initialState , action: ActionsType): UsersInitialStateType => {

    switch (action.type) {
        case 'SET_AUTH_USER_DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case 'SET_IS_LOGGED_IN': {
            return {...state, isAuth: action.value}
        }

        default: return state
    }
}

export const setAuthUserDataAC = (id: string, email: string, login: string) =>
    ({type: 'SET_AUTH_USER_DATA', data: {id, email, login}})
export const setIsLoggedInAC = (value: boolean) => ({type: 'SET_IS_LOGGED_IN', value})

export const meTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email , login))
            }
        })
}
export const loginInTC = (data: LoginInType) => (dispatch: Dispatch) => {
    authAPI.loginIn(data)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
                dispatch(setAppErrorAC(null))
            } else {
                handleServerAppError(response.data, dispatch)
            }
        })
}
export const logOutTC = () => (dispatch: Dispatch) => {
    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
            }
        })
}



export default authReducer