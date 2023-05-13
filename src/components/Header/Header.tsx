import logo from "../../img/logo5.png";
import notification from "../../img/notification.svg";
import Vector from "../../img/vector.svg";
import account_icon from "../../img/account-icon.jpg";
import Stroke from "../../img/Stroke.svg";
import React from "react";
import './Header.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={'header'}>
            <div className={'header__flex-container'}>
                <div className={'header__logo'}>
                    <img src={logo}/>
                </div>
                {props.isAuth ?
                    <div className={'header__menu-bar'}>
                        <div className={'menu-bar__icon'}>
                            <img src={notification} />
                        </div>
                        <div className={'menu-bar__icon menu-bar__icon1'}>
                            <img src={Vector} />
                        </div>
                        <div className={'menu-bar__account'}>
                            <div className={'account__icon'}>
                                <img src={account_icon}/>
                            </div>
                            <p className={'account__name'}>{props.login}</p>
                            <img src={Stroke} />
                        </div>
                    </div> :<NavLink className={'login'} to={'/login'}>LOGIN</NavLink>
                }
            </div>
        </header>
    );
}
