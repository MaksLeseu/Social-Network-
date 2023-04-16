import store, {ActionType, PostsDataType} from "./state";

type StateType = {
    postsData: PostsDataType[]
}

type ContentReducerType = (state: StateType, action: ActionType) => StateType

const ADD_POST: string = 'ADD-POST';

const contentReducer: ContentReducerType = (state, action) => {

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