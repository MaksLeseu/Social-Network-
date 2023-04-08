import React, {FC} from "react";
import './SidebarRight.css'
import {Favorites} from "./Favorites/Favorites";
import {RootStateType} from "../../Redux/state";

type SidebarRightPropsType = {
    state: RootStateType
}

type favoritesElementType = {
    id: string
    personName: string
}

export const SidebarRight: FC<SidebarRightPropsType> = (props) => {

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