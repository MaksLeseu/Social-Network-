import {combineReducers, createStore} from "redux";
import contentReducer from "./content-reducer";
import messagesReducer from "./messages-reducer";
import {sidebarRightReducer} from "./sidebarRigth-reducer";

let reducers = combineReducers({
    content: contentReducer,
    messages: messagesReducer,
    sidebarRight: sidebarRightReducer,
})

let store = createStore(reducers);

export default store;