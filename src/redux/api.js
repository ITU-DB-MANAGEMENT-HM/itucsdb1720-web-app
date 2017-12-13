import { actions } from "../constants";

const { students, departments, homeworks } = actions;

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
    },
    {
      name: "deleteCourse",
      method: "delete",
      endpoint: "students/courses/{id}",
      trigger: students.DELETE_COURSE,
      success: students.DELETE_COURSE_SUCCESS,
      fail: students.DELETE_COURSE_FAIL,
      successMethod: (state, payload) => {
        let key = 0;
        for(const c in state.courses) {
          if (c.crn === payload.data.crn) break;
          key++;
        }
        return { 
          ...state, courses: [...state.courses.slice(0, key - 1), ...state.courses.slice(key, state.courses.length)]
        };
      },
      failMethod: (state, payload) => {
        return { ...state, apiErrors: {...state.apiErrors, deleteCourse: "Check Your Connection!"} };
      }
    },
    {
      name: "addCourse",
      method: "post",
      endpoint: "students/courses/{id}",
      trigger: students.ADD_COURSE,
      success: students.ADD_COURSE_SUCCESS,
      fail: students.ADD_COURSE_FAIL,
      successMethod: (state, payload) => {
        return { 
          ...state, courses: [...state.courses, payload.data]
        };
      },
      failMethod: (state, payload) => {
        return { ...state, apiErrors: {...state.apiErrors, deleteCourse: "Check Your Connection!"} };
      }
    }
  ],
  departments:[
    {
      method: "get",
      endpoint: "api/faculties",
      trigger: departments.FETCH_FACULTIES,
      success: departments.FETCH_FACULTIES_SUCCESS,
      fail: departments.FETCH_FACULTIES_FAIL,
      successMethod: (state, payload) => {
        return {...state, faculties: payload.data, fetchError: ""};
      },
      failMethod: (state, payload) =>{
        return {...state, fetchError: "Network problem", faculties: []};
      }
    },
    {
      method: "get",
      endpoint: "api/lecturers",
      trigger: departments.FETCH_LECTURERS,
      success: departments.FETCH_LECTURERS_SUCCESS,
      fail: departments.FETCH_LECTURERS_FAIL,
      successMethod: (state, payload) => {
        return {...state, faculties: [], lecturers: payload.data}
      },
      failMethod: (state, payload) => {
        return{...state, lecturers:[], fetchError: "Network err"}
      }
    }
  ],

  homeworks: [
  {
    method: "get",
    endpoint: "api/homeworks",
    trigger: homeworks.FETCH_HOMEWORKS,
    success: homeworks.FETCH_HOMEWORKS_SUCCESS,
    fail: homeworks.FETCH_HOMEWORKS_FAIL,
  
  successMethod: (state, payload) => {
    return {...state, homeworks: payload.data, fetchError: ""};
  },
  failMethod: (state, payload) => {
    return {...state, homeworks:[], fetchError: "Network problem"}
  }
  },
  {
    method: "post",
    endpoint: "api/homeworks",
    trigger: homeworks.ADD_HOMEWORK,
    success: homeworks.ADD_HOMEWORK_SUCCESS,
    fail: homeworks.ADD_HOMEWORK_FAIL,
    successMethod: (state, payload) => {
      return {...state, homeworks: payload.data, fetchError: ""}
    },
    failMethod: (state, payload) => {
      return {...state, fetchError: "Network problem"}
    }
  },
  {
    method: "delete",
    endpoint: "api/homeworks",
    trigger: homeworks.DELETE_HOMEWORK,
    success: homeworks.DELETE_HOMEWORK_SUCCESS,
    fail: homeworks.DELETE_HOMEWORK_FAIL,
    successMethod: (state, payload) => {
      return {...state, homeworks: payload.data, fetchError: ""}
    },
    failMethod: (state, payload) => {
      return {...state, fetchError: "Network  problem"}
    }
  }
  ]
};

export default api;
