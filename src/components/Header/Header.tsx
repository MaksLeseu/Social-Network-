import logo from "../../img/logo5.png";
import notification from "../../img/notification.svg";
import Vector from "../../img/vector.svg";
import account_icon from "../../img/account-icon.jpg";
import Stroke from "../../img/Stroke.svg";
import React, {useState} from "react";
import './Header.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOutTC: any
}

export function Header(props: HeaderPropsType) {
    const dispatch = useDispatch()
    const [panel, setPanel] = useState<boolean>(false)

    const panelClick = () => setPanel(!panel)
    const logOuted = () => dispatch(props.logOutTC())

    return (
        <header className={'header'}>
            <div className={'header__flex-container'}>
                <div className={'header__logo'}>
                    <img src={logo}/>
                </div>
                {props.isAuth
                    ?
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
                            <button className={'account__btn'} onClick={panelClick}>
                                <img src={Stroke} />
                            </button>
                            {panel
                                ?
                                <div className={'account__panel'}>
                                    <ul>
                                        <li><button>Friends</button></li>
                                        <li><button>Video</button></li>
                                        <li><button onClick={logOuted}>Log Out</button></li>
                                    </ul>
                                </div>
                                :
                                null
                            }

                        </div>
                    </div>
                    :
                    <NavLink className={'login'} to={'/login'}>LOGIN</NavLink>
                }
            </div>
        </header>
    );
}
