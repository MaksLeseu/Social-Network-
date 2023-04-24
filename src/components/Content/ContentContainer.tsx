import React from "react";
import {ActionType} from "../../Redux/store";
import {Content} from "./Content";
import {addPostActionCreator} from "../../Redux/content-reducer";
import {connect} from "react-redux";
import {ActionsType} from "../../Redux/redux-store";

let mapStateToProps = (state: any) => {
    return {
        state: state.content.postsData
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        addPostCallback: (valueInput: string) => {
            dispatch(addPostActionCreator(valueInput))
        }
    }
}

export const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)