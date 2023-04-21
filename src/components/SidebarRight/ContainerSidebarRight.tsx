import React from "react";
import {connect} from "react-redux";
import {SidebarRight} from "./SidebarRight";

let mapStateToProps = (state: any) => {
    return {
        state: state.sidebarRight.favorites
    }
}

export const ContainerSidebarRight = connect(mapStateToProps)(SidebarRight)