import React from "react";
import {ActionType} from "../../Redux/store";
import {Content} from "./Content";
import {addPostActionCreator} from "../../Redux/content-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        state: state.content.postsData
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPostCallback: (valueInput: string) => {
            dispatch(addPostActionCreator(valueInput))
        }
    }
}

export const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)