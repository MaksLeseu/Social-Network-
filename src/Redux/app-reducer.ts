type InitialStateType = {
    error: string | null
}

type ActionType = {
    type: 'SET_APP_ERROR'
    error: string | null
}

const initialState: InitialStateType = {
    error: null
}

export const appReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_APP_ERROR': {
            return {...state, error: action.error}
        }

        default: return state
    }
}

export const setAppErrorAC = (error: string | null): ActionType => ({type: 'SET_APP_ERROR', error})