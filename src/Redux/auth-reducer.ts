import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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

const authReducer: AuthReducerType = (state= initialState , action) => {

    switch (action.type) {
        case 'SET_AUTH_USER_DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default: return state
    }
}

export const setAuthUserDataAC = (id: string, email: string, login: string) =>
    ({type: 'SET_AUTH_USER_DATA', data: {id, email, login}})

export const loginInTC = () => (dispatch: Dispatch) => {
    authAPI.loginIn()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email , login))
            }
        })
}

export default authReducer