import React, {useState} from "react";
import s from './Messages.module.css'
import logo1 from '../../img/logo1.png'
import {NavLink} from "react-router-dom";


type DialogType = {
    id: string
    userName: string
}

type ChatType = {
    text: string
}


function Dialog(props: DialogType) {
    return (
        <NavLink to={'/messages/' + props.id} className={s.dialogs__dialog}>
            <div className={s.dialog__icon}><img src={logo1}/></div>
            <span>{props.userName}</span>
        </NavLink>
    )
}

function Chat(props: ChatType) {
    return (
        <>
            <div className={s.block__text}>
                <span className={s.text}>{props.text}</span>
            </div>
        </>
    )
}

export function Messages() {

    const dialogsData = [
        {id: '1', name: 'Nik Filman'},
        {id: '2', name: 'Mich Filman'},
        {id: '3', name: 'Vera Filmana'},
        {id: '4', name: 'Vik Prigozin'},
    ];

    const usersMessage = [
        {id: '1', message: 'Hi brother!'},
        {id: '2', message: 'Ready to take your writing skills.'},
        {id: '3', message: 'А есть что-то другое.'},
    ];

    return (
        <div className={s.messages}>
            <div className={s.messages__dialogs}>
                <h3>Dialogs</h3>
                <input className={s.dialogs__search}></input>
                <>
                    <Dialog userName={dialogsData[0].name} id={dialogsData[0].id} />
                    <Dialog userName={dialogsData[1].name} id={dialogsData[1].id} />
                    <Dialog userName={dialogsData[2].name} id={dialogsData[2].id} />
                    <Dialog userName={dialogsData[3].name} id={dialogsData[3].id} />
                </>
            </div>
            <div className={s.messages__chat}>
                <div className={s.chat__user}>
                    <div className={s.user__block}>
                        <div className={s.user__icon}><img src={logo1}/></div>
                        <span>Nik Filman</span>
                    </div>
                </div>
                <div className={s.chat__text}>
                    <Chat text={usersMessage[0].message}/>
                    <Chat text={usersMessage[1].message}/>
                    <Chat text={usersMessage[2].message}/>
                </div>
            </div>
        </div>
    )
}