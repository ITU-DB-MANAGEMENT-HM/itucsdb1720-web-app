import { actions } from "../constants";

const { students } = actions;

const api = {
  students: [
    {
      name: "fetchStudentCourses",
      method: "get",
      endpoint: "/students/courses",
      trigger: students.FETCH_STUDENT_COURSE,
      success: students.FETCH_STUDENT_COURSE_SUCCESS,
      fail: students.FETCH_STUDENT_COURSE_FAIL,
      successMethod: (state, payload) => {
        return { ...state, courses: payload.data, fetchError: "" };
      },
      failMethod: (state, payload) => {
        return { ...state, apiErrors: {...state.apiErrors, fetchStudent: "Check Your Connection!"} };
      }
    },
    {
      name: "updateStudent",
      method: "put",
      endpoint: "/students",
      trigger: students.UPDATE_STUDENT,
      success: students.UPDATE_STUDENT_SUCCESS,
      fail: students.UPDATE_STUDENT_FAIL,
      successMethod: (state, payload) => {
        return { 
          ...state, 
          user: {
            ...state.user, 
            study_start: state.user.study_start, 
            study_end: state.user.study_end
          }
        };
      },
      failMethod: (state, payload) => {
        return { ...state, apiErrors: {...state.apiErrors, updateStudent: "Check Your Connection!"} };
      }
    },
    {
      name: "searchCourses",
      method: "get",
      endpoint: "/courses",
      trigger: students.SEARCH_COURSES,
      success: students.SEARCH_COURSES_SUCCESS,
      fail: students.SEARCH_COURSES_FAIL,
      successMethod: (state, payload) => {
        return { 
          ...state, 
          searchCourses: payload.data
        };
      },
      failMethod: (state, payload) => {
        return { ...state, apiErrors: {...state.apiErrors, searchCourses: "Check Your Connection!"} };
      }
    }
  ]
};

export default api;
