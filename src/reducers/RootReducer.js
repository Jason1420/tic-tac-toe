import { combineReducers } from "redux";
import GameReducer from "./GameReducer";
import LoginReducer from "./LoginReducer";
const RootReducer = combineReducers({
    game: GameReducer,
    login: LoginReducer
});

export default RootReducer;