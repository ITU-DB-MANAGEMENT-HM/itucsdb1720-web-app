import { combineReducers } from "redux";

import user from "./user";
import students from "./students";
import departments from "./department"
import homeworks from "./homeworks"
export default combineReducers({ user, students, departments, homeworks});
