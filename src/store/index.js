import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { formReducer } from "./formReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));