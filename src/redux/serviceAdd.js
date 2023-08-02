import {
    CHANGE_SERVICE_FIELD,
    FIX_SERVICE_FIELD,
    CHANGE_EDIT_STATE,
    FILTER_SERVICE_FIELD
  } from "./action";
  
  const initialState = { key: "", name: "", price: "", editId: "", filter: "" };
  
  const serviceAddReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_SERVICE_FIELD:
        const { name, value } = action.payload;
        return { ...state, [name]: value };
      case FIX_SERVICE_FIELD:
        const { key } = action.payload;
        return { ...state, key };
      case CHANGE_EDIT_STATE:
        const { editId } = action.payload;
        console.log("editId", editId);
        return { ...state, editId };
      case FILTER_SERVICE_FIELD:
        const { filter } = action.payload;
        return { ...state, filter };
      default:
        return state;
    }
  };
  
  export default serviceAddReducer;