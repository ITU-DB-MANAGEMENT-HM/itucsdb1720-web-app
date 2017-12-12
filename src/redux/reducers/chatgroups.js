import {reducerFactory} from "../../utils"
import api from "../api"

const initialState = {
    chatgroups: []
};
const actionReducers = {};

export default reducerFactory(initialState, actionReducers, api.chatgroups)