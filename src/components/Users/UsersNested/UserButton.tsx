import React from 'react';
import s from "./UsersNested.module.css";
import {usersAPI} from "../../../api/api";

type UserButtonPropsType = {
    title: string

}

/*export const UserButton = () => {
    return (
        <button
            disabled={props.followingInProgress.some((id: any) => id === u.id)}
            className={`${s.btn} ${s.btnActive}`}
            onClick={() => {
                props.disableBtn(true, u.id)
                usersAPI.unfollow(u.id)
                    .then(responce => {
                        if (responce.data.resultCode === 0) {
                            props.follow(u.id)
                        }
                        props.disableBtn(false, u.id)
                    })
            }}
        >Unfollow</button>
    );
};*/
