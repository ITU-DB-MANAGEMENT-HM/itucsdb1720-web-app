import { combineReducers } from "redux";

import user from "./user";
import students from "./students";
import departments from "./department"
export default combineReducers({ user, students, departments});
