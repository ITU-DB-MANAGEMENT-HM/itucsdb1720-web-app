
import {reducerFactory} from "../../utils"
import api from "../api"

const initialState = {
    isClicked: false,
    lecturers: [],
    faculties: []
};
const actionReducers = {};

export default reducerFactory(initialState, actionReducers, api.departments)