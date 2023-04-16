import store, {ActionType, PostsDataType} from "./store";

type StateType = {
    postsData: PostsDataType[]
}

type ContentReducerType = (state: StateType, action: ActionType) => StateType

const ADD_POST: string = 'ADD-POST';

let initialState = {
    postsData: [
        {id: '1', message: 'Hi, my name is.', level: 1},
        {id: '2', message: 'Im Frontend Developer', level: 30},
        {id: '3', message: 'Im love a beautiful girls. You love a girls? --> Like!!!', level: 100},
    ]
}

const contentReducer: ContentReducerType = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
        state.postsData.push(
            {id: '10', message: action.message, level: 0}
        )
            return state;
        default: return state
    }
}

export const addPostActionCreator = (state: string) => ({type: ADD_POST, message: state})

export default contentReducer