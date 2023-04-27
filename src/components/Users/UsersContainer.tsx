import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersDataType, UsersInitialStateType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    state: UsersInitialStateType
}
type MapDispatchPropsType = {
    followChangeCallback: (id: string) => void
    unfollowChangeCallback :(id: string) => void
    setUsers: (users: UsersDataType[]) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.users
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
        }
        /*shorMore: () => {}*/
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)