import {reducerFactory} from "../../utils"
import api from "../api"

const initialState = {
    chatgroups: [],
    chatgroup_members: [],
    isClicked: false
};
const actionReducers = {};

export default reducerFactory(initialState, actionReducers, api.chatgroups)