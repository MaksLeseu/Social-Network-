import {combineReducers, createStore} from "redux";
import contentReducer from "./content-reducer";
import messagesReducer from "./messages-reducer";
import {sidebarRightReducer} from "./sidebarRigth-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    content: contentReducer,
    messages: messagesReducer,
    sidebarRight: sidebarRightReducer,
    users: usersReducer,
})

let store = createStore(reducers);

export default store;