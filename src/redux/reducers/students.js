import apis from "../api";
import { reducerFactory } from "../../utils";
// import { actions } from "../../constants";
// const {
//   // this is the type of the actions to create.
// } = actions.students;
const initialState = {
  // this is the shape of the data.
};

const actionReducers = {};

export default reducerFactory(initialState, actionReducers, apis.clients);
