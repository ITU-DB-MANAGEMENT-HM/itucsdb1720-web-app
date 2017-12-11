import {reducerFactory} from "../../utils"
import api from "../api"

const initialState = {
    homeworks: [],
    isAddOpen: false
};
const actionReducers = {};

export default reducerFactory(initialState, actionReducers, api.homeworks)