import React, {FC} from "react";
import account_icon from "../../../img/account-icon.jpg";
import '../Posts.css'

type MyPostsPropsType = {
    massege: string
    level: number
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
    return (
        <div className={'my-posts'}>
            <div className={'my-posts__box'}>
                <div className={'my-posts__image'}>
                    <img src={account_icon} />
                </div>
                <p className={'my-posts__text'}>{props.massege}</p>
            </div>
            <span>Star: {props.level}</span>
        </div>
    );
}