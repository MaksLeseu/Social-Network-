import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "../Messages.module.css";
import logo1 from "../../../img/logo1.png";


export type DialogLogicType = {
    id: string
    userName: string
}

export const DialogLogic: FC<DialogLogicType> = (props) => {
    return (
        <NavLink to={'/messages/' + props.id} className={s.dialogs__dialog}>
            <div className={s.dialog__icon}><img src={logo1}/></div>
            <span>{props.userName}</span>
        </NavLink>
    )
}