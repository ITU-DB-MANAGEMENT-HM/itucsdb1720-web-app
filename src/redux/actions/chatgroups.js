import { actions } from "../../constants";

const actionTypes = actions.chatgroups;

export const getChatgroups = () => ({
    type: actionTypes.FETCH_CHATGROUPS
})

export const getMemberOfChatgroup = () => ({
        type: actionTypes.FETCH_CHATGROUP_MEMBERS
    }
)

export const createChatgroup = (item) => {
    return {
        type: actionTypes.CREATE_CHATGROUP,
        payload:{
            data: {
                "name": item
            }
        }
    }
}