import React, {FC} from "react";
import {ActionType, StoreType} from "../../Redux/store";
import {Content} from "./Content";
import {addPostActionCreator} from "../../Redux/content-reducer";

type ContentContainerPropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}

export const ContentContainer: FC<ContentContainerPropsType> = (props) => {

    const addPostCallback = (valueInput: string) => {
        props.dispatch(addPostActionCreator(valueInput))
    }

    return (
        <Content
            state={props.store.getState()}
            addPostCallback={addPostCallback}
        />
    )
}