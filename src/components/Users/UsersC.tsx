import React, {FC} from "react";
import s from "./UsersNested/UsersNested.module.css";
import {UsersDataType} from "../../Redux/users-reducer";
import logo1 from "../../img/logo1.png";
import {NavLink} from "react-router-dom";

type UsersCPropsType = {
    currentPage: any
    usersData: any
    pageSize: any
    totalUsersCount: any
    follow: (id: string) => void
    unfollow :(id: string) => void
    onPageChanged: (pageNumber: number) => void
}

const UsersC: FC<UsersCPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesCount + 1; i++) {
        if (i < 10) {
            pages.push(i)
        }
    }

    return (
        <div className={s.container}>
            {
                props.usersData.map((u: UsersDataType) => (
                    <div className={s.userContainer}>
                        <div className={s.block}>
                            <NavLink to={'/profile/' + u.id}>
                                <div className={s.userIcon}><img src={u.photos.small !== null ? u.photos.small : logo1}/></div>
                            </NavLink>
                            <div>{u.followed
                                ?
                                <button
                                    className={`${s.btn} ${s.btnActive}`}
                                    onClick={() => props.follow(u.id)}
                                >Unfollow</button>
                                :
                                <button
                                    className={s.btn}
                                    onClick={() => props.unfollow(u.id)}
                                >Follow</button>}</div>
                        </div>
                        <div className={s.user}>
                            <div className={s.information}>
                                <div className={s.name}>{u.name}</div>
                                <div className={s.status}>{u.status}</div>
                            </div>
                            <div className={s.live}>
                                <div>Molo</div>
                                <div>Huligans</div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className={s.usersBtn}>
                {pages.map(p => {
                    return <button
                        className={props.currentPage === p ? `${s.usersPage} ${s.usersPageActive}` : s.usersPage}
                        onClick={(e) => props.onPageChanged(p)}
                    >
                        {p}
                    </button>
                })}
            </div>
        </div>
    )
}

export default UsersC