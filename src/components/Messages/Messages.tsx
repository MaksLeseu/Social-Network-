import React from "react";
import s from './Messages.module.css'
import logo1 from '../../img/logo1.png'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";


export function Messages() {
    return (
        <div className={s.messages}>
            <div className={s.messages__dialogs}>
                <h3>Dialogs</h3>
                <input className={s.dialogs__search}></input>
                <NavLink to={'/messages/1'} className={s.dialogs__dialog}>
                    <div className={s.dialog__icon}><img src={logo1}/></div>
                    <span>Kathy Pacheco</span>
                </NavLink>
                <NavLink to={'/messages/2'} className={s.dialogs__dialog}>
                    <div className={s.dialog__icon}><img src={logo1}/></div>
                    <span>Alex Petrov</span>
                </NavLink>
                <NavLink to={'/messages/3'} className={s.dialogs__dialog}>
                    <div className={s.dialog__icon}><img src={logo1}/></div>
                    <span>Alex Buckmaster</span>
                </NavLink>
                <NavLink to={'/messages/4'} className={s.dialogs__dialog}>
                    <div className={s.dialog__icon}><img src={logo1}/></div>
                    <span>Nika Rodriges</span>
                </NavLink>
            </div>
            <div className={s.messages__chat}>
                <div className={s.chat__user}>
                    <div className={s.user__block}>
                        <div className={s.user__icon}><img src={logo1}/></div>
                        <span>Kathy Pacheco</span>
                    </div>
                </div>
                <div className={s.chat__text}>
                    <div className={s.block__text}>
                        <span className={s.text}>Hi brother!</span>
                    </div>
                    <div className={s.block__text}>
                        <span className={s.text}>Ready to take your writing skills.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}