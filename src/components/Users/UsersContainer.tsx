import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    setCurrentPageAC, setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UsersDataType,
    UsersInitialStateType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import UsersC from "./UsersC";

type MapStatePropsType = {
    state: UsersInitialStateType

}
type MapDispatchPropsType = {
    followChangeCallback: (id: string) => void
    unfollowChangeCallback :(id: string) => void
    setUsers: (users: UsersDataType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.users,
        /*pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount*/
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followChangeCallback: (id: string) => {
            dispatch(followAC(id))
        },
        unfollowChangeCallback: (id: string) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)