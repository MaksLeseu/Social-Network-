import React, {ChangeEvent, useState} from "react";
import s from "../Messages.module.css";
import logo1 from "../../../img/logo1.png";
import {addMessage} from "../../../Redux/state";

type MessagesItemPropsType = {
    usersMessagesElement: any
    addMessage: (message: string) => void
}

export function MessagesItem(props: MessagesItemPropsType) {

    const [valueInput, setValueInput] = useState('')

    const getValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
    }

    const testButton = () => {
        props.addMessage(valueInput)
        setValueInput('')
    }

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
                <input
                    onChange={getValueInput}
                    className={s.chatInput}
                    value={valueInput}
                />
                <button onClick={testButton} className={s.chatButton}>{'>'}</button>
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
