import React from "react";
import './Posts.css'
import {MyPosts} from "./MyPosts";


export function Posts() {
    return (
        <div className={'posts'}>
            <MyPosts massege={'Hi, my name is.'} level={'1'}/>
            <MyPosts massege={'Im Frontend Developer'} level={'31'}/>
            <MyPosts massege={'Im love a beautiful girls. You love a girls? --> Like!!!'} level={'100'}/>
        </div>
    )
}