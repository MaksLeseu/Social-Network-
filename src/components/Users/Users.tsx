import React, {FC} from "react";
import {UsersDataType} from "../../Redux/users-reducer";
import {UsersNested} from "./UsersNested/UsersNested";
import s from "./UsersNested/UsersNested.module.css";
import {UsersPropsType} from "./UsersContainer";

export const Users: FC<UsersPropsType> = (props) => {

    /*let users = props.usersData.map((el: UsersDataType) =>
        <UsersNested
            id={el.id}
            name={el.name}
            /!*city={el.location.city}
            country={el.location.country}*!/
            status={el.status}
            followed={el.followed}
            followChangeCallback={props.follow}
            unfollowChangeCallback={props.unfollow}
        />)*/

    return <div className={s.container}>{}</div>
}