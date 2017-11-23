import { actions } from "../constants";

const { students } = actions;

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
  ]
};

export default api;
