import React, {FC} from "react";
import s from "./UsersNested/UsersNested.module.css";
import {UsersDataType} from "../../Redux/users-reducer";
import logo1 from "../../img/logo1.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersCPropsType = {
    currentPage: any
    usersData: any
    pageSize: any
    totalUsersCount: any
    follow: (id: string) => void
    unfollow :(id: string) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: any
    disableBtn: (isFetching: boolean, id: string) => void
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
                                :
                                <button
                                    disabled={props.followingInProgress.some((id: any) => id === u.id)}
                                    className={s.btn}
                                    onClick={() => {
                                        props.disableBtn(true, u.id)
                                        usersAPI.follow(u.id)
                                            .then(responce => {
                                                if (responce.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.disableBtn(false, u.id)
                                            })
                                    }}
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