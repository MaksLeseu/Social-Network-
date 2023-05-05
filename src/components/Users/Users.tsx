import React, {FC} from "react";
import {UsersDataType} from "../../Redux/users-reducer";
import {UsersNested} from "./UsersNested/UsersNested";
import s from "./UsersNested/UsersNested.module.css";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

export const Users: FC<UsersPropsType> = (props) => {

    /*if (props.state.usersData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
            props.setUsers(responce.data.items)
        })
    }*/

    let users = props.state.usersData.map((el: UsersDataType) =>
        <UsersNested
            id={el.id}
            name={el.name}
            /*city={el.location.city}
            country={el.location.country}*/
            status={el.status}
            followed={el.followed}
            followChangeCallback={props.follow}
            unfollowChangeCallback={props.unfollow}
        />)

    return <div className={s.container}>{users}</div>



}