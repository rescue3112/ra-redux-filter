import { ADD_SERVICE, REMOVE_SERVICE, UPDATE_SERVICE } from "./action";

const initialState = [
  { id: Math.random(), name: "Замена стекла", price: 21000 },

];
const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [
        ...state,
        { id: Math.random(), name: name, price: Number(price) },
      ];
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);
    }
    case UPDATE_SERVICE:
      const { id, data } = action.payload;
      const service = state.find((service) => service.id === id);
      service.name = data.name;
      service.price = data.price;
      const newState = state.filter((service) => service.id !== id);
      newState.push({ ...service });
      return newState;
    default:
      return state;
  }
};

export default serviceListReducer;