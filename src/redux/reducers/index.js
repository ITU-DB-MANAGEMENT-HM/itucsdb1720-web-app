import { combineReducers } from "redux";

import student from "./student";
import departments from "./department"
import homeworks from "./homeworks"
export default combineReducers({ student, departments, homeworks});
