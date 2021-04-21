import { combineReducers } from "redux";

import shoeReducer from "./shoe/shoeReducer";
import sandleReducer from "./sandles/sandleReducer";
import chappleReducer from "./chapples/chappleReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  shoe: shoeReducer,
  sandle: sandleReducer,
  chapple: chappleReducer,
  user: userReducer,
});

export default rootReducer;
