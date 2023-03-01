import React from "react";
import './Posts.css'
import {MyPosts} from "./MyPosts/MyPosts";


type ElementPostsDataType = {
    id: string
    message: string
    level: number
}


export function Posts() {

    const postsData: Array<ElementPostsDataType> = [
        {id: '1', message: 'Hi, my name is.', level: 1},
        {id: '1', message: 'Im Frontend Developer', level: 30},
        {id: '1', message: 'Im love a beautiful girls. You love a girls? --> Like!!!', level: 100},
    ];

    let postsElements = postsData.map(el => <MyPosts massege={el.message} level={el.level}/> );

    return (
        <div className={'posts'}>
            {postsElements}
        </div>
    )
}