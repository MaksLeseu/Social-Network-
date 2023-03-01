import React from "react";
import s from "../Messages.module.css";


type ChatType = {
    text: string
}

export function Chat(props: ChatType) {
    return (
        <>
            <div className={s.block__text}>
                <span className={s.text}>{props.text}</span>
            </div>
        </>
    )
}