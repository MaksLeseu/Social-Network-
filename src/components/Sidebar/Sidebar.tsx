import user from "../../img/sidebar/user.svg";
import news from "../../img/sidebar/News.svg";
import acquaintance from "../../img/sidebar/Acquaintance.svg";
import messages from "../../img/sidebar/message.svg";
import settings from "../../img/sidebar/settings.svg";
import developers from "../../img/sidebar/Developers.svg";
import technologies from "../../img/sidebar/Technologies.svg";
import advertising from "../../img/sidebar/advertising.svg";
import React from "react";
import './Sidebar.css'
import {Navigate, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


export function Sidebar() {
    const isAuth = useSelector<boolean>((state: any) => state.auth.isAuth)

    if (!isAuth) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className={'sidebar'}>
            <div className={'sidebarMenu'}>
                <NavLink to={'/profile'} className={'sidebar__menu-home-page sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={user}/>
                    <p>Home page</p>
                </NavLink>
                <NavLink to={'/news'} className={'sidebar__menu-news sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={news}/>
                    <p>News</p>
                </NavLink>
                <NavLink to={'/users'} className={'sidebar__menu-acquaintance sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={acquaintance}/>
                    <p>Users</p>
                </NavLink>
                <NavLink to={'/acquaintance'} className={'sidebar__menu-acquaintance sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={acquaintance}/>
                    <p>Acquaintance</p>
                </NavLink>
                <NavLink to={'/messages'} className={'sidebar__menu-messages sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={messages}/>
                    <p>Messages</p>
                </NavLink>
                <NavLink to={'/settings'} className={'sidebar__menu-settings sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={settings}/>
                    <p>Settings</p>
                </NavLink>
                <NavLink to={'/developers'} className={'sidebar__menu-developers sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={developers}/>
                    <p>Developers</p>
                </NavLink>
                <NavLink to={'/technologies'} className={'sidebar__menu-technologies sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={technologies}/>
                    <p>Technologies</p>
                </NavLink>
            </div>
            <div className={'advertising'}>
                <h3>Advertising</h3>
                <div className={'advertising__image'}>
                    <img src={advertising} />
                </div>
                <p>Take the test and get a
                    10% discount
                    on tuition</p>
            </div>
        </div>
    )
}