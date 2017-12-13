import { combineReducers } from "redux";

import student from "./student";
import departments from "./department"
import homeworks from "./homeworks"
import chatgroups from "./chatgroups"
export default combineReducers({ student, departments, homeworks, chatgroups});
