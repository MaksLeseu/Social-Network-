import React from "react";
import s from './Messages.module.css'


export function Messages() {
    return (
        <div className={s.messages}>
            <div className={s.messages__dialogs}>
                <h3>Dialogs</h3>
            </div>
            <div className={s.messages__chat}>
                <div className={s.chat__user}></div>
            </div>
        </div>
    )
}