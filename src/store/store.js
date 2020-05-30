import reducer from "../reducers/reducers";
// import { contacts } from "../static-data";
import { createStore } from "redux";

// const store = createStore(reducer, {contacts});
const store = createStore(reducer);

export default store;