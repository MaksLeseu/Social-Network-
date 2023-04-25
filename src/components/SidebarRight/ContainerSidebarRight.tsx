import React from "react";
import {connect} from "react-redux";
import {SidebarRight} from "./SidebarRight";
import {AppStateType} from "../../Redux/redux-store";
import {SidebarRightInitialStateType} from "../../Redux/sidebarRigth-reducer";

type MapStatePropsType = {
    state: SidebarRightInitialStateType
}
export type SidebarRightPropsType = MapStatePropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.sidebarRight
    }
}

export const ContainerSidebarRight = connect(mapStateToProps)(SidebarRight)