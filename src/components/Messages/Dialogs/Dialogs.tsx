import React, {FC} from "react";
import s from "../Messages.module.css";
import {DialogsDataElementsPropsType} from "../Messages";

type DialogsPropsType = {
    dialogsElement: any
}


export const Dialogs: FC<DialogsPropsType> = (props) => {

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