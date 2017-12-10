import { actions } from "../../constants";

const actionTypes = actions.homeworks;

export const getHomeworks = () => ({
    type: actionTypes.FETCH_HOMEWORKS
})

export const deleteHomework = () => ({
    type: actionTypes.DELETE_HOMEWORKS,
    payload:{
        data:{
            // Koy buraya
        }
    }
})