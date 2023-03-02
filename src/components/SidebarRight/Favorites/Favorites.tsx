import React from "react";
import '../SidebarRight.css'
import icon1 from '../../../img/sidebarRight/Favorites1.svg'
import icon_mail from '../../../img/icon_mail.svg'


export function Favorites(props: any) {
    return (
        <div className={'favorites'}>
            <div className={'favorites__icon'}>
                <img src={icon1} className={'favorites__img'}/>
                <span className={'favorites__name'}>{props.personName}</span>
            </div>
            <a href={'#'} className={'favorites__btn'}><img src={icon_mail} /></a>
        </div>
    )
}