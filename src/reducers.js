import { combineReducers } from "redux";
import { usersReducer } from "./modules/users/store/usersReducer";

export const rootReducer = combineReducers({
  app: usersReducer,
});
