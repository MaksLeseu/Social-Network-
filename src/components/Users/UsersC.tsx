import React, {FC} from "react";
import s from "./UsersNested/UsersNested.module.css";
import {UsersDataType} from "../../Redux/users-reducer";
import logo1 from "../../img/logo1.png";
import {NavLink} from "react-router-dom";
import {UserButton} from "./UsersNested/UserButton";

type UsersCPropsType = {
    currentPage: number
    usersData: any
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: any
    followTC: (id: string) => void
    unfollowTC: (id: string) => void
}

const UsersC: FC<UsersCPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesCount + 1; i++) {
        if (i < 10) {
            pages.push(i)
        }
    }

    const followOnClick = (id: string) => props.followTC(id)
    const unfollowOnClick = (id: string) => props.unfollowTC(id)

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
                                <UserButton
                                    id={u.id}
                                    title={'Unfollow'}
                                    className={`${s.btn} ${s.btnActive}`}
                                    onClick={followOnClick}
                                    disabled={props.followingInProgress.some((id: any) => id === u.id)} />
                                :
                                <UserButton
                                    id={u.id}
                                    title={'Follow'}
                                    className={s.btn}
                                    onClick={unfollowOnClick}
                                    disabled={props.followingInProgress.some((id: any) => id === u.id)} />
                            }</div>
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