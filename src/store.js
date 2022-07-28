import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import thunk from "redux-thunk"

const reducer = combineReducers({
  user: userReducer
})


const initialState = {

}

const middlewares = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store