import React from "react";
import './Posts.css'
import {MyPosts} from "./MyPosts";


type ElementPostsDataType = {
    id: string
    message: string
}


export function Posts() {

    const postsData: Array<ElementPostsDataType> = [
        {id: '1', message: 'Hi, my name is.'},
        {id: '1', message: 'Im Frontend Developer'},
        {id: '1', message: 'Im love a beautiful girls. You love a girls? --> Like!!!'},
    ];

    return (
        <div className={'posts'}>
            <MyPosts massege={postsData[0].message} level={'1'}/>
            <MyPosts massege={postsData[1].message} level={'31'}/>
            <MyPosts massege={postsData[2].message} level={'100'}/>
        </div>
    )
}