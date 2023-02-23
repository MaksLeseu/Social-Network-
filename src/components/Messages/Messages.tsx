import React from "react";
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
    return (
        <div className={s.messages}>
            <div className={s.messages__dialogs}>
                <h3>Dialogs</h3>
                <input className={s.dialogs__search}></input>
                <>
                    <Dialog userName={'Nik Filman'} id={'1'} />
                    <Dialog userName={'Mich Filman'} id={'2'} />
                    <Dialog userName={'Vera Filmana'} id={'3'} />
                    <Dialog userName={'Vik Prigozin'} id={'4'} />
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
                    <Chat text={'Hi brother!'}/>
                    <Chat text={'Ready to take your writing skills.'}/>
                    <Chat text={'А есть что-то другое.'}/>
                </div>
            </div>
        </div>
    )
}