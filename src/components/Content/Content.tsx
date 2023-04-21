import React, {FC} from "react";
import {PersonalInformation} from "./NestedComponents/PersonalInformation/PersonalInformation";
import {InputField} from "./NestedComponents/InputField/InputField";
import {Posts} from "./NestedComponents/Posts/Posts";
import {PostLogic} from "./PostLogic/PostLogic";
import {RootStateType} from "../../Redux/store";

export type ContentPropsType = {
    state: any
    addPostCallback: (change: string) => void
}

export type ElementPostsDataType = {
    id: string
    message: string
    level: number
}

export const Content: FC<ContentPropsType> = (props) => {

    let postsElements = props.state.map((el: ElementPostsDataType) =>
        <PostLogic message={el.message} level={el.level}/> );

    return (
        <div className={'profile'}>
            <PersonalInformation />
            <InputField addPostCallback={props.addPostCallback} />
            <Posts postsElements={postsElements} />
        </div>
    )
}