import {FavoritesType} from "./store";
import {ActionsType} from "./redux-store";


type SidebarRightReducerType = (state: StateType, action: ActionsType) => StateType

type StateType = {
    favorites: FavoritesType[]
}

let initialState: StateType = {
    favorites: [
        {id: '1', personName: 'Kathy Pacheco'},
        {id: '2', personName: 'Rodger Struck'},
        {id: '3', personName: 'Alex Buckmaster'},
    ]
}

export const sidebarRightReducer: SidebarRightReducerType = (state= initialState, action) => {

    return state
}