import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    FIX_SERVICE_FIELD,
    UPDATE_SERVICE,
    CHANGE_EDIT_STATE,
    FILTER_SERVICE_FIELD,
  } from "./action";
  
  export function addService(name, price) {
    return { type: ADD_SERVICE, payload: { name, price } };
  }
  
  export function removeService(id) {
    return { type: REMOVE_SERVICE, payload: { id } };
  }
  
  export function changeService(name, value) {
    return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
  }
  
  export function fixService(id) {
    return { type: FIX_SERVICE_FIELD, payload: { id } };
  }
  
  export function changeEditStatus(editId) {
    return { type: CHANGE_EDIT_STATE, payload: { editId } };
  }
  
  export function updateService(id, data) {
    return { type: UPDATE_SERVICE, payload: { id, data } };
  }
  
  export function filterService(filter) {
    return { type: FILTER_SERVICE_FIELD, payload: { filter } };
  }