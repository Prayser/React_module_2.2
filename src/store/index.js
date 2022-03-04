import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { formReducer } from "./reducers/formReducer";
import { loginReducer } from "./reducers/loginReducer";
import { userReducer } from "./reducers/userReducer";
import { loadingReducer } from "./reducers/loadingReducer";

const rootReducer = combineReducers({
    form: formReducer,
    login: loginReducer,
    user: userReducer,
    loading: loadingReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));