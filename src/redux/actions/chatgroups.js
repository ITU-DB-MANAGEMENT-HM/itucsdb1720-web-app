import { actions } from "../../constants";

const actionTypes = actions.chatgroups;

export const getChatgroups = () => ({
    type: actionTypes.FETCH_CHATGROUPS
})