import { actions } from "../constants";

const { students } = actions;

const api = {
  students: [
    {
      method: "get",
      endpoint: "/students/courses",
      trigger: students.FETCH_STUDENT_COURSE,
      success: students.FETCH_STUDENT_COURSE_SUCCESS,
      fail: students.FETCH_STUDENT_COURSE_FAIL,
      successMethod: (state, payload) => {
        console.log(payload)
        return { ...state, courses: payload.data, fetchError: "" };
      },
      failMethod: (state, payload) => {
        return { ...state, fetchError: "Check Your Connection!" };
      }
    },
    {
      method: "put",
      endpoint: "/students",
      trigger: students.UPDATE_STUDENT,
      success: students.UPDATE_STUDENT_SUCCESS,
      fail: students.UPDATE_STUDENT_FAIL,
      successMethod: (state, payload) => {
        console.log(payload)
        return { ...state, courses: payload.data };
      },
      failMethod: (state, payload) => {
        return { ...state, fetchError: "Check Your Connection!" };
      }
    }
  ]
};

export default api;
