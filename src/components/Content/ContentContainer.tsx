import React from "react";
import {Content} from "./Content";
import {addPostActionCreator, ContentInitialStateType, PostType} from "../../Redux/content-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    state: ContentInitialStateType
}
type MapDispatchProps = {
    addPostCallback: (valueInput: string) => void
}
export type ContentPropsType = MapStatePropsType & MapDispatchProps

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.content
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        addPostCallback: (valueInput: string) => {
            dispatch(addPostActionCreator(valueInput))
        }
    }
}

export const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)