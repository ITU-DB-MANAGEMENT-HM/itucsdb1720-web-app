import { actions } from "../constants";

const { students, departments, homeworks, chatgroups} = actions;

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
        return {...state, lecturers:[], faculties: payload.data, fetchError: "", isClicked: false};
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
        return {...state, faculties: [], lecturers: payload.data, isClicked: true}
      },
      failMethod: (state, payload) => {
        return{...state, lecturers:[], fetchError: "Network err"}
      }
    },
    {
      method: "delete",
      endpoint: "api/lecturers",
      trigger: departments.DELETE_LECTURER,
      success: departments.DELETE_LECTURER_SUCCESS,
      fail: departments.DELETE_LECTURER_FAIL,
      successMethod: (state, payload) => {
        return {...state, lecturers: payload.data}
      },
      failMethod: (state, payload) => {
        return {...state, fetchError: "Network error"}
      }
    },
    {
      method: "post",
      endpoint: "api/lecturers",
      trigger: departments.ADD_LECTURER,
      success: departments.ADD_LECTURER_SUCCESS,
      fail: departments.DELETE_LECTURER_FAIL,
      successMethod: (state, payload) => {
        return {...state}
      },
      failMethod: (state, payload) => {
        return {...state, fetchError: "Network problem"}
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
  ],
  chatgroups:[
    {
    method: "get",
    endpoint: "api/chatgroups",
    trigger: chatgroups.FETCH_CHATGROUPS,
    success: chatgroups.FETCH_CHATGROUPS_SUCCESS,
    fail: chatgroups.FETCH_CHATGROUPS_FAIL,
    successMethod: (state, payload) => {
      return {...state, chatgroups: payload.data}
    },
    failMethod: (state, payload) =>{
      return {...state, fetchError: "network problem"}
    }
  },
  {
    // BIG TODO 
    method: "get",
    endpoint: "api/chatgroups/{id}",
    trigger: chatgroups.FETCH_CHATGROUP_MEMBERS,
    success: chatgroups.FETCH_CHATGROUP_MEMBERS_SUCCESS,
    fail: chatgroups.FETCH_CHATGROUP_MEMBERS_FAIL,
    successMethod: (state, payload) => {
      return {...state, chatgroup_members: payload.data, isClicked: true}
    },
    failMethod: (state, payload) => {
      return {...state, fetchError: "Network Error"}
    }
  },
  {
    method: "post",
    endpoint: "api/chatgroups",
    trigger: chatgroups.CREATE_CHATGROUP,
    success: chatgroups.CREATE_CHATGROUP_SUCCESS,
    fail: chatgroups.CREATE_CHATGROUP_FAIL,
    successMethod : (state, payload) => {
      return {...state, chatgroups: payload.data}
    },
    failMethod: (state, payload) => {
      return {...state, fetchError: "Network err"}
    }
  }
  
]
};

export default api;
