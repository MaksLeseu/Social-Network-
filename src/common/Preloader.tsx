import React from "react";
import preloader from "../img/preloader.gif";
import s from './Common.module.css';


export const Preloader = () => {
    return (
        <div className={s.preloaderContainer}>
            <img src={preloader} className={s.preloader} />
        </div>
    )
}