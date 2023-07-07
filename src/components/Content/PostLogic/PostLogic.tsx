import React, {FC} from "react";
import account_icon from "../../../img/account-icon.jpg";
import '../NestedComponents/Posts/Posts.css'
import logo1 from '../../../img/logo1.png';

type PostLogicPropsType = {
    message: string
    level: number
    img: any
    params: any
}

export const PostLogic: FC<PostLogicPropsType> = (props) => {
    const userImg = props.img || logo1
    return (
        <div className={'my-posts'}>
            <div className={'my-posts__box'}>
                <div className={'my-posts__image'}>
                    <img src={props.params.userId ? userImg : account_icon} />
                </div>
                <p className={'my-posts__text'}>{props.message}</p>
            </div>
            <span>Star: {props.level}</span>
        </div>
    );
}