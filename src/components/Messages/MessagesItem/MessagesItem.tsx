import React from "react";
import s from "../Messages.module.css";
import logo1 from "../../../img/logo1.png";

type MessagesItemPropsType = {
    usersMessagesElement: any
}

export function MessagesItem(props: MessagesItemPropsType) {

    return (
        <>
            <div className={s.chat__user}>
                <div className={s.user__block}>
                    <div className={s.user__icon}><img src={logo1}/></div>
                    <span>Nik Filman</span>
                </div>
            </div>
            <div className={s.chat__text}>
                {props.usersMessagesElement}
            </div>
        </>
    )
}