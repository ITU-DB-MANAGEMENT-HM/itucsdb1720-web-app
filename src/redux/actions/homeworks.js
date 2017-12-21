import { actions } from "../../constants";

const actionTypes = actions.homeworks;


export const addHomework = (fields) => ({
    type: actionTypes.ADD_HOMEWORK,
    payload : {
        data: fields}

})



export const getHomeworks = () => ({
    type: actionTypes.FETCH_HOMEWORKS
})

export const removeHomework = (fields) => {
    console.log(fields.homework_id)
    return {
        type: actionTypes.DELETE_HOMEWORK, 
        payload: {
            data: {
                    fields
            }
        }
    }
};