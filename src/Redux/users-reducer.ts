import React from "react";
import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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
    followingInProgress: any
}

type UsersReducerType = (state: UsersInitialStateType, action: any) => UsersInitialStateType

let initialState: UsersInitialStateType = {
    usersData: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.id]
                : state.followingInProgress.filter((id: any) => id !== action.id)
            }
        }
        default: return state
    }
}

export const followAC = (userID: string) => ({type: 'FOLLOW', id: userID})
export const unfollowAC = (userID: string) => ({type: 'UNFOLLOW', id: userID})
export const setUsers = (users: UsersDataType[]) => ({type: 'SET_USERS', users: users})
export const setCurrentPage = (page: number) => ({type: 'SET_CURRENT_PAGE', currentPage: page})
export const setTotalCount = (count: number) => ({type: 'SET_TOTAL_COUNT', totalUsersCount: count})
export const setIsFetching = (newIsFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', newIsFetching})
export const disableBtn = (isFetching: boolean, id: string) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, id})


export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(response.data.items))
            dispatch(setTotalCount(response.data.totalCount))
        })
}

export const followTC = (id: string) => (dispatch: Dispatch) => {
    dispatch(disableBtn(true, id))
    usersAPI.unfollow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(disableBtn(false, id))
        })
}

export const unfollowTC = (id: string) => (dispatch: Dispatch) => {
    dispatch(disableBtn(true, id))
    usersAPI.follow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowAC(id))
            }
            dispatch(disableBtn(false, id))
        })
}

export default usersReducer