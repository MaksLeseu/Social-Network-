import React, {ChangeEvent, FC, useState} from "react";
import s from "../Messages.module.css";
import logo1 from "../../../img/logo1.png";
import {ActionType, addMessageActionCreator} from "../../../Redux/state";

type MessagesItemPropsType = {
    usersMessagesElement: any
    dispatch: (action: ActionType) => void
}

export const MessagesItem: FC<MessagesItemPropsType> = (props) => {

    const [valueInput, setValueInput] = useState('')

    const getValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator(valueInput))
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
                <button onClick={addMessage} className={s.chatButton}>{'>'}</button>
            </div>
        </>
    )
}
