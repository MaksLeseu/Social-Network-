import React, {ChangeEvent, FC, useState} from "react";
import s from "../../Messages.module.css";
import logo1 from "../../../../img/logo1.png";
import img from '../../../../img/input_field/btn_input.svg'

type ChatMessagesPropsType = {
    usersMessagesElement: any
    addMessageCallback: (valueInput: string) => void
}

export const ChatMessages: FC<ChatMessagesPropsType> = (props) => {

    const [valueInput, setValueInput] = useState('')

    const getValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
    }

    const addMessage = () => {
        props.addMessageCallback(valueInput)
        /*props.dispatch(addMessageActionCreator(valueInput))*/
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
                    value={valueInput}
                    className={s.chatInput}
                    onChange={getValueInput}
                />
                <button
                    className={s.chatButton}
                    onClick={addMessage}
                >
                    <div className={s.imgContainer}><img src={img} className={s.img}/></div>
                </button>
            </div>
        </>
    )
}
