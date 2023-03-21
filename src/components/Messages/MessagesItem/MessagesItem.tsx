import React from "react";
import s from "../Messages.module.css";
import logo1 from "../../../img/logo1.png";

type MessagesItemPropsType = {
    usersMessagesElement: any
}

export function MessagesItem(props: MessagesItemPropsType) {

    return (
        <>
            <div className={s.chatUser}>
                <div className={s.userBlock}>
                    <div className={s.userIcon}><img src={logo1}/></div>
                    <span>Vik Prigozin</span>
                </div>
            </div>
            <div className={s.chatBlock}>
                {props.usersMessagesElement}
            </div>
            <div className={s.chatForm}>
                <input className={s.chatInput} />
                <button className={s.chatButton}>{'>'}</button>
            </div>
        </>
    )
}

/*
.messages__chat {
    width: 304px;
    height: 700px;
    background-color: #edf4ff;
    border-right: 2px #B2EAEE solid;
    border-top: 2px #B2EAEE solid;
    border-bottom: 2px #B2EAEE solid;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}*/
