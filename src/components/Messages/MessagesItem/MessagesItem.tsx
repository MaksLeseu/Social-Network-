import React, {ChangeEvent, FC, useState} from "react";
import s from "../Messages.module.css";
import logo1 from "../../../img/logo1.png";

type MessagesItemPropsType = {
    usersMessagesElement: any
    addMessage: (message: string) => void
}

export const MessagesItem: FC<MessagesItemPropsType> = (props) => {

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
