import React, {FC} from "react";
import {ActionType, StoreType} from "../../Redux/store";
import {Content} from "./Content";
import {addPostActionCreator} from "../../Redux/content-reducer";
import {connect} from "react-redux";

type ContentContainerPropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}

/*export const ContentContainer: FC<ContentContainerPropsType> = (props) => {

    const addPostCallback = (valueInput: string) => {
        props.dispatch(addPostActionCreator(valueInput))
    }

    return (
        <Content
            state={props.store.getState()}
            addPostCallback={addPostCallback}
        />
    )
}*/

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