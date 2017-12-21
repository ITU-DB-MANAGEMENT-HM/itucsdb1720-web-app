import { actions } from "../../constants";

const actionTypes = actions.chatgroups;

export const getChatgroups = () => ({
    type: actionTypes.FETCH_CHATGROUPS
})

export const getMemberOfChatgroup = (cid) => ({
        type: actionTypes.FETCH_CHATGROUP_MEMBERS,
        params: {
            id: cid
        }
        
    }
)

export const createChatgroup = (item) => {
    return {
        type: actionTypes.CREATE_CHATGROUP,
        payload:{
            data: {
                "id": item
            }
        }
    }
}