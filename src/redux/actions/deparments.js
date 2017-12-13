import { actions } from "../../constants";

const actionTypes = actions.departments;

export const getFaculties = () => ({
    type: actionTypes.FETCH_FACULTIES
})

export const getLecturers = (id) => ({
    type: actionTypes.FETCH_LECTURERS,
    payload:{
        query: {"dep": id}
    }
})

export const removeLecturer = (item) => {
    
    console.log(item)
    return {
        type: actionTypes.DELETE_LECTURER,
        payload:{
            query:{
                "dep": item.department_id
            },
            data:{
                "id": item.id
            }
        }
    }
    
}
export const addLecturer = (item) => {
    console.log(item)
    return {
        type: actionTypes.ADD_LECTURER,
        payload:{
            data: item
        }
    }
}