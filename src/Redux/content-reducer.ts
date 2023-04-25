import {ActionsType} from "./redux-store";

export type PostType = {
    id: string
    message: string
    level: number
}

export type ContentInitialStateType = {
    content: PostType[]
}

type ContentReducerType = (state: ContentInitialStateType, action: ActionsType) => ContentInitialStateType

type AddPostActionCreatorType = (state: string) => ActionsType

let initialState: ContentInitialStateType = {
    content: [
        {id: '1', message: 'Hi, my name is.', level: 1},
        {id: '2', message: 'Im Frontend Developer', level: 30},
        {id: '3', message: 'Im love a beautiful girls. You love a girls? --> Like!!!', level: 100},
    ]
}

const contentReducer: ContentReducerType = (state = initialState, action): ContentInitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            return {...state, content: [...state.content,
                 {id: '10', message: action.message, level: 0}]}

        default: return state
    }
}

export const addPostActionCreator: AddPostActionCreatorType = (state: string) => ({type: 'ADD-POST', message: state})

export default contentReducer