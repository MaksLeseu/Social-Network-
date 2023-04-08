import React, {FC} from "react";
import './Posts.css'

type PostsPropsType = {
    postsElements: any
}

export const Posts: FC<PostsPropsType> = (props) => {

    return (
        <div className={'posts'}>
            {props.postsElements}
        </div>
    )
}