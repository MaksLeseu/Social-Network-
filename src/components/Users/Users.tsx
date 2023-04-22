import React, {FC} from "react";
import {UsersDataType} from "../../Redux/users-reducer";
import {UsersNested} from "./UsersNested/UsersNested";
import s from "./UsersNested/UsersNested.module.css";

type UsersPropsType = {
    state: UsersDataType[]
    followChangeCallback: (id: string) => void
    unfollowChangeCallback: (id: string) => void
}

export const Users: FC<UsersPropsType> = (props) => {

    let users = props.state.map((el: UsersDataType) =>
        <UsersNested
            id={el.id}
            name={el.fullName}
            city={el.location.city}
            country={el.location.country}
            status={el.status}
            follow={el.follow}
            followChangeCallback={props.followChangeCallback}
            unfollowChangeCallback={props.unfollowChangeCallback}
        />)


    return <div className={s.container}>{users}</div>

}