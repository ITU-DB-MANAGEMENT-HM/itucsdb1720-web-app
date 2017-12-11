import { actions } from "../../constants";

const {LOGOUT, LOGIN, FETCH_USER} = actions.user;

export const login = (username, password, pin) => ({
  type: LOGIN,
  username,
  password,
  pin
});

export const logout = () => ({ type: LOGOUT });

export const fetchUser = () => ({ type: FETCH_USER });

const {
    // this is the type of the actions to create.
    FETCH_STUDENT_COURSE,
    UPDATE_STUDENT,
    SEARCH_COURSES
} = actions.students;

export const fetchStudentCourses = () => {
    return {
        type: FETCH_STUDENT_COURSE
    }
}

export const updateStudentDate = (startDate, endDate) => {
    return {
        type: UPDATE_STUDENT, 
        payload: {
            data: {
                study_start: startDate,
                study_end: endDate
            }
        }
    }
};

export const searchCourses = (query, page) => {
    const q = {}
    console.log(query)
    if (query) q.query = query;
    if (page) q.page = page;
    return {
        type: SEARCH_COURSES, 
        payload: {
            query: q
        }
    }
};