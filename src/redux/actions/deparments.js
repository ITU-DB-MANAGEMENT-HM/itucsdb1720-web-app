import { actions } from "../../constants";

const actionTypes = actions.departments;

export const getFaculties = () => ({
    type: actionTypes.FETCH_FACULTIES,
})

export const getLecturers = () => ({
    type: actionTypes.FETCH_LECTURERS
})