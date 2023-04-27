import React, {FC} from "react";
import s from './UsersNested.module.css'
import logo1 from "../../../img/logo1.png";

type UsersNestedPropsType = {
    id: string
    name: string
    /*city: string
    country: string*/
    status: string
    followed: boolean
    followChangeCallback: (id: string) => void
    unfollowChangeCallback: (id: string) => void
}


export const UsersNested: FC<UsersNestedPropsType> = (props) => {

    return (
        <div className={s.userContainer}>
            <div className={s.block}>
                <div className={s.userIcon}><img src={logo1}/></div>
                <div>{props.followed
                    ?
                    <button
                        className={`${s.btn} ${s.btnActive}`}
                        onClick={() => props.followChangeCallback(props.id)}
                    >Unfollow</button>
                    :
                    <button
                        className={s.btn}
                        onClick={() => props.unfollowChangeCallback(props.id)}
                    >Follow</button>}</div>
            </div>
            <div className={s.user}>
                <div className={s.information}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.status}>{props.status}</div>
                </div>
                <div className={s.live}>
                    <div>Molo</div>
                    <div>Huligans</div>
                </div>
            </div>
        </div>
    )
}