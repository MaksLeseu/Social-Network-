import React from "react";
import {ActionsType} from "./redux-store";

export type  UsersDataType = {
    id: string
    followed: boolean
    name: string
    status: string
    /*location: {
        city: string
        country: string
    }*/
}

export type UsersInitialStateType = {
    usersData: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type UsersReducerType = (state: UsersInitialStateType, action: any) => UsersInitialStateType

let initialState: UsersInitialStateType = {
    usersData: [
        /*{id: '1', follow: false, fullName: 'Max', status: 'I live in Russian!', location: {city: 'Kelce', country: 'Poland'}},
        {id: '2', follow: true, fullName: 'Fil', status: 'I need more money!', location: {city: 'Kelce', country: 'Poland'}},
        {id: '3', follow: true, fullName: 'Alex', status: 'The bigger the better!', location: {city: 'Soligorsk', country: 'Belarusian'}},
        {id: '4', follow: false, fullName: 'Vitluss', status: 'Doctors should get more money!', location: {city: 'Molo', country: 'Belarusian'}},*/
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer: UsersReducerType = (state= initialState , action) => {

    switch (action.type) {
        case 'FOLLOW':
            return {...state, usersData:
                    state.usersData.map((el) => el.id === action.id ? {...el, follow: false} : el)}
        case 'UNFOLLOW':
            return {...state, usersData:
                    state.usersData.map((el) => el.id === action.id ? {...el, follow: true} : el)}
        case 'SET_USERS': {
            return {...state, usersData: action.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default: return state
    }
}

export const followAC = (userID: string) => ({type: 'FOLLOW', id: userID})
export const unfollowAC = (userID: string) => ({type: 'UNFOLLOW', id: userID})
export const setUsersAC = (users: UsersDataType[]) => ({type: 'SET_USERS', users: users})
export const setCurrentPageAC = (page: number) => ({type: 'SET_CURRENT_PAGE', currentPage: page})
export const setTotalCountAC = (count: number) => ({type: 'SET_TOTAL_COUNT', totalUsersCount: count})

export default usersReducer