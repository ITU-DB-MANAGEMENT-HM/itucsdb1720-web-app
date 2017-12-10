import { actions } from "../../constants";

const actionTypes = actions.lecturers;

export const getLect = (department) => ({
    type: actionTypes.FETCH,
    department
})
