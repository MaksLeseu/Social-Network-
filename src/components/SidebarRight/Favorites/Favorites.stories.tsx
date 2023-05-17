import React, {FC} from "react";
import {Favorites} from "./Favorites";
import {SidebarRightInitialStateType} from "../../../Redux/sidebarRigth-reducer";
import {SidebarRight} from "../SidebarRight";

export default {
    title: 'SidebarRight',
    component: SidebarRight
}

const initialState: SidebarRightInitialStateType = {
    favorites: [
        {id: '1', personName: 'Kathy Pacheco'},
        {id: '2', personName: 'Rodger Struck'},
        {id: '3', personName: 'Alex Buckmaster'},
    ]
}


export const Example1 = () => {
    return <SidebarRight state={initialState} />
}

export const Example2 = () => {

    return initialState.favorites.map((el) =>
        <Favorites personName={el.personName} key={el.id} /> )
}