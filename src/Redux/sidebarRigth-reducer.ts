import {ActionType, FavoritesType, RootStateType} from "./store";


type SidebarRightReducerType = (state: StateType, action: ActionType) => StateType

type StateType = {
    favorites: FavoritesType[]
}

let initialState = {
    favorites: [
        {id: '1', personName: 'Kathy Pacheco'},
        {id: '2', personName: 'Rodger Struck'},
        {id: '3', personName: 'Alex Buckmaster'},
    ]
}

export const sidebarRightReducer: SidebarRightReducerType = (state= initialState, action) => {

    return state
}