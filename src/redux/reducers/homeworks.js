import {reducerFactory} from "../../utils"
import api from "../api"

const initialState = {
    homeworks: []
};
const actionReducers = {};

export default reducerFactory(initialState, actionReducers, api.departments)