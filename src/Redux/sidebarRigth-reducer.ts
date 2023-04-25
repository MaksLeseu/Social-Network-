import {ActionsType} from "./redux-store";

type FavoritesType = {
    id: string
    personName: string
}

type SidebarRightReducerType = (state: SidebarRightInitialStateType, action: ActionsType) => SidebarRightInitialStateType

export type SidebarRightInitialStateType = {
    favorites: FavoritesType[]
}

let initialState: SidebarRightInitialStateType = {
    favorites: [
        {id: '1', personName: 'Kathy Pacheco'},
        {id: '2', personName: 'Rodger Struck'},
        {id: '3', personName: 'Alex Buckmaster'},
    ]
}

export const sidebarRightReducer: SidebarRightReducerType = (state= initialState, action) => {

    return state
}