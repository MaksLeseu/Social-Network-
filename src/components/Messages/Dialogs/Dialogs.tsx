import React from "react";
import s from "../Messages.module.css";

type DialogsPropsType = {
    dialogsElement: any
}


export function Dialogs(props: DialogsPropsType) {

    return (
        <>
            <h3>Dialogs</h3>
            <input className={s.dialogs__search}></input>
            <>
                {props.dialogsElement}
            </>
        </>
    )
}