import React from "react";
import {ActionsType} from "./redux-store";

export type  UsersDataType = {
    id: string
    followed: boolean
    name: string
    status: string
    photos?: any
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
    isFetching: boolean
}

type UsersReducerType = (state: UsersInitialStateType, action: any) => UsersInitialStateType

let initialState: UsersInitialStateType = {
    usersData: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer: UsersReducerType = (state= initialState , action) => {

    switch (action.type) {
        case 'FOLLOW':
            return {...state, usersData:
                    state.usersData.map((el) => el.id === action.id ? {...el, followed: false} : el)}
        case 'UNFOLLOW':
            return {...state, usersData:
                    state.usersData.map((el) => el.id === action.id ? {...el, followed: true} : el)}
        case 'SET_USERS': {
            return {...state, usersData: action.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.newIsFetching}
        }
        default: return state
    }
}

export const follow = (userID: string) => ({type: 'FOLLOW', id: userID})
export const unfollow = (userID: string) => ({type: 'UNFOLLOW', id: userID})
export const setUsers = (users: UsersDataType[]) => ({type: 'SET_USERS', users: users})
export const setCurrentPage = (page: number) => ({type: 'SET_CURRENT_PAGE', currentPage: page})
export const setTotalCount = (count: number) => ({type: 'SET_TOTAL_COUNT', totalUsersCount: count})
export const setIsFetching = (newIsFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', newIsFetching})

export default usersReducer