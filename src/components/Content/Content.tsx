import React, {FC} from "react";
import {PersonalInformation} from "../PersonalInformation/PersonalInformation";
import {InputField} from "../InputField/InputField";
import {Posts} from "../Posts/Posts";
import {MyPosts} from "../Posts/MyPosts/MyPosts";
import {RootStateType} from "../../Redux/state";

type ContentPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}

export type ElementPostsDataType = {
    id: string
    message: string
    level: number
}

export const Content: FC<ContentPropsType> = (props) => {

    let postsElements = props.state.content.postsData.map((el: ElementPostsDataType) => <MyPosts massege={el.message} level={el.level}/> );

    return (
        <div className={'profile'}>
            <PersonalInformation />
            <InputField addPost={props.addPost} />
            <Posts postsElements={postsElements} />
        </div>
    )
}