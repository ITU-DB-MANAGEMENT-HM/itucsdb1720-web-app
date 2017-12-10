import { actions } from "../constants";

const { students, departments, homeworks } = actions;

const api = {
  students: [
    {
      method: "get",
      endpoint: "/students",
      trigger: students.FETCH,
      success: students.FETCH_SUCCESS,
      fail: students.FETCH_FAIL,
      successMethod: (state, payload) => {
        return { ...state, data: payload.data, fetchError: "" };
      },
      failMethod: (state, payload) => {
        return { ...state, fetchError: "Check Your Connection!" };
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
  }
  ]
};

export default api;
