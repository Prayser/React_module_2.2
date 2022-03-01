import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { formReducer } from "./formReducer";
import { loginReducer } from "./loginReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    form: formReducer,
    login: loginReducer,
    user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));