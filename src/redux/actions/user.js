import { actions } from "../../constants";
const actionTypes = actions.user;

export const login = (username, password) => ({
  type: actionTypes.LOGIN,
  username,
  password
});

export const logout = () => ({ type: actionTypes.LOGOUT });

export const fetchUser = () => ({ type: actionTypes.FETCH_USER });
