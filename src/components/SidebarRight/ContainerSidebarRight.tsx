import React from "react";
import {connect} from "react-redux";
import {SidebarRight} from "./SidebarRight";
import {AppStateType} from "../../Redux/redux-store";
import {SidebarRightInitialStateType} from "../../Redux/sidebarRigth-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Messages} from "../Messages/Messages";

type MapStatePropsType = {
    state: SidebarRightInitialStateType
}
export type SidebarRightPropsType = MapStatePropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.sidebarRight
    }
}

export const ContainerSidebarRight = compose(connect(mapStateToProps), withAuthRedirect)(SidebarRight)