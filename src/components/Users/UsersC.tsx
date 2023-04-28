import React from "react";
import s from "./UsersNested/UsersNested.module.css";
import logo1 from "../../img/logo1.png";
import {UsersDataType, UsersInitialStateType} from "../../Redux/users-reducer";
import axios from "axios";

type UsersCType = {
    state: UsersInitialStateType
    setUsers: (users: UsersDataType[]) => void
    followChangeCallback: (id: string) => void
    unfollowChangeCallback :(id: string) => void
}

class UsersC extends React.Component<UsersCType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
            this.props.setUsers(responce.data.items)
        })
    }

    render () {
        return <div className={s.container}>
            {this.props.state.usersData.map((el: UsersDataType) => (
                <div className={s.userContainer}>
                    <div className={s.block}>
                        <div className={s.userIcon}><img src={logo1}/></div>
                        <div>{el.followed
                            ?
                            <button
                                className={`${s.btn} ${s.btnActive}`}
                                onClick={() => this.props.followChangeCallback(el.id)}
                            >Unfollow</button>
                            :
                            <button
                                className={s.btn}
                                onClick={() => this.props.unfollowChangeCallback(el.id)}
                            >Follow</button>}</div>
                    </div>
                    <div className={s.user}>
                        <div className={s.information}>
                            <div className={s.name}>{el.name}</div>
                            <div className={s.status}>{el.status}</div>
                        </div>
                        <div className={s.live}>
                            <div>Molo</div>
                            <div>Huligans</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    }
}

export default UsersC
