import React from "react";
import {ActionsType} from "./redux-store";

export type UsersDataType = {
    id: string
    follow: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

type StateType = {
    usersData: UsersDataType[]
}

type UsersReducerType = (state: StateType, action: any) => StateType

/*const FOLLOW: string = 'FOLLOW'
const UNFOLLOW: string = 'UNFOLLOW'
const SET_USERS: string = 'SET_USERS'*/

let initialState = {
    usersData: [
        {id: '1', follow: false, fullName: 'Max', status: 'I live in Russian!', location: {city: 'Kelce', country: 'Poland'}},
        {id: '2', follow: true, fullName: 'Fil', status: 'I need more money!', location: {city: 'Kelce', country: 'Poland'}},
        {id: '3', follow: true, fullName: 'Alex', status: 'The bigger the better!', location: {city: 'Soligorsk', country: 'Belarusian'}},
        {id: '4', follow: false, fullName: 'Vitluss', status: 'Doctors should get more money!', location: {city: 'Molo', country: 'Belarusian'}},
    ]
}

const usersReducer: UsersReducerType = (state = initialState, action) => {

    switch (action.type) {
        case 'FOLLOW':
            return {...state, usersData:
                    state.usersData.map((el) => el.id === action.id ? {...el, follow: false} : el)}
        case 'UNFOLLOW':
            return {...state, usersData:
                    state.usersData.map((el) => el.id === action.id ? {...el, follow: true} : el)}
        case 'SET_USERS': {
            return {...state, usersData: [...state.usersData, action.users]}
        }
        default: return state
    }
}

export const followAC = (userID: string) => ({type: 'FOLLOW', id: userID})
export const unfollowAC = (userID: string) => ({type: 'UNFOLLOW', id: userID})
export const setUsersAC = (users: []) => ({type: 'SET_USERS', users: users})

export default usersReducer