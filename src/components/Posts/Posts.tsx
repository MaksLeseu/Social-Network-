import React from "react";
import './Posts.css'


export function Posts(props: any) {

    return (
        <div className={'posts'}>
            {props.postsElements}
        </div>
    )
}