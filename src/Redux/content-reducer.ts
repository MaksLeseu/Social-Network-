import store, {PostsDataType} from "./store";
import {ActionsType} from "./redux-store";

type StateType = {
    postsData: PostsDataType[]
}

type ContentReducerType = (state: StateType, action: ActionsType) => StateType

type AddPostActionCreatorType = (state: string) => ActionsType

/*const ADD_POST: string = 'ADD-POST';*/

let initialState: StateType = {
    postsData: [
        {id: '1', message: 'Hi, my name is.', level: 1},
        {id: '2', message: 'Im Frontend Developer', level: 30},
        {id: '3', message: 'Im love a beautiful girls. You love a girls? --> Like!!!', level: 100},
    ]
}

const contentReducer: ContentReducerType = (state = initialState, action): StateType => {

    switch (action.type) {
        case 'ADD-POST':
            return {...state, postsData: [...state.postsData,
                 {id: '10', message: action.message, level: 0}]}

        default: return state
    }
}

export const addPostActionCreator: AddPostActionCreatorType = (state: string) => ({type: 'ADD-POST', message: state})

export default contentReducer