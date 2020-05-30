import { combineReducers } from "redux";
import user from "./userReducer";
import contacts from "./contactsReducer";
import activeUserId from "./activeUserIdReducer";
import messages from "./messagesReducer";
import typing from "./typingReducer";

export default combineReducers({
  user,
  messages,
  typing,       
  contacts,
  activeUserId
});