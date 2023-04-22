import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, unfollowAC} from "../../Redux/users-reducer";

let mapStateToProps = (state: any) => {
    return {
        state: state.users.usersData
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        followChangeCallback: (id: string) => {
            dispatch(followAC(id))
        },
        unfollowChangeCallback: (id: string) => {
            dispatch(unfollowAC(id))
        },

        /*shorMore: () => {}*/
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)