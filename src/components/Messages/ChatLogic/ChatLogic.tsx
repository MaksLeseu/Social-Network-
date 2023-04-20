import React, {FC} from "react";
import s from "../Messages.module.css";


type ChatLogicType = {
    text: string
    id: string
}

export const ChatLogic: FC<ChatLogicType> = (props) => {

    function filteredMessages() {
        if (props.id === '2' || props.id === '3') {
            return (
                <span className={s.text_my}>{props.text}</span>
            )
        } else {
            return (
                <div className={s.block_friend}>
                    <span className={s.text_friend}>{props.text}</span>
                </div>
            )
        }
    }

    return (
        <>
            <div className={s.block__text}>
                {filteredMessages()}
            </div>
        </>
    )
}