import React from "react";
import {Posts} from "./Posts";
import {PostLogic} from "../../PostLogic/PostLogic";
import {ElementPostsDataType} from "../../ProfileContainer";
import {ContentInitialStateType} from "../../../../Redux/profile-reducer";

export default {
    title: 'Posts',
    component: Posts
}

export const Example1 = (props: any) => {

    let initialState: ContentInitialStateType = {
        posts: [
            {id: '1', message: 'Hi, my name is.', level: 1},
            {id: '2', message: 'Im Frontend Developer', level: 30},
            {id: '3', message: 'Im love a beautiful girls. You love a girls? --> Like!!!', level: 100},
        ],
        profile: null
    }

    let postsElements = initialState.posts.map((el: ElementPostsDataType) =>
        <PostLogic
            message={el.message}
            level={el.level}
            key={el.id}
            img={false}
            params={false} />);

    return <Posts postsElements={postsElements} />
}