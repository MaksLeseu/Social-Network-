import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type PostType = {
    id: string
    message: string
    level: number
}

export type ContentInitialStateType = {
    posts: PostType[]
    profile: any
}

type ProfileReducerType = (state: ContentInitialStateType, action: ActionsType) => ContentInitialStateType

type AddPostActionCreatorType = (state: string) => ActionsType
type SetUserProfileACType = (state: string) => ActionsType

let initialState: ContentInitialStateType = {
    posts: [
        {id: '1', message: 'Hi, my name is.', level: 1},
        {id: '2', message: 'Im Frontend Developer', level: 30},
        {id: '3', message: 'Im love a beautiful girls. You love a girls? --> Like!!!', level: 100},
    ],
    profile: null
}

const profileReducer: ProfileReducerType = (state = initialState, action): ContentInitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            return {...state, posts: [...state.posts,
                 {id: '10', message: action.message, level: 0}]}
        case 'SET_USERS_PROFILE': {
            return {...state, profile: action.profile}
        }

        default: return state
    }
}

export const addPostActionCreator: AddPostActionCreatorType = (state: string) => ({type: 'ADD-POST', message: state})
export const setUserProfileAC: SetUserProfileACType = (profile: any) => ({type: 'SET_USERS_PROFILE', profile: profile})

export const getProfileTC = (profileId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(profileId)
        .then(response => {
            console.log(response.data)
            dispatch(setUserProfileAC(response.data))
        })
}

export default profileReducer