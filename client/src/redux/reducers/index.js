import { combineReducers } from "redux";
import alert from "../alert/alert.reducer";
import user from "../user/user.reducers";
import admin from "../admin/admin.reducers";

const rootReducer = combineReducers({
  alert,
  user,
  admin,
});

export default rootReducer;
