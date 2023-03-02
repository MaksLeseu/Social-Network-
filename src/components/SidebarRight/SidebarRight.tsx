import React from "react";
import './SidebarRight.css'
import {Favorites} from "./Favorites/Favorites";

type favoritesElementType = {
    id: string
    personName: string
}

export function SidebarRight(props: any) {

    let favoritesElement = props.state.sidebarRight.favorites.map((el: favoritesElementType) => <Favorites personName={el.personName} /> )

    return (
        <div className={'sidebar-right'}>
            <div className={'sidebar-right__favorites'}>
                <h3 className={'sidebar-right__favorites__title'}>Favorites</h3>
                <div className={'sidebar-right__favorites__content'}>
                    {favoritesElement}
                </div>
            </div>
        </div>
    )
}