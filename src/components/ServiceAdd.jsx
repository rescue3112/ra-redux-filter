import { useSelector, useDispatch } from "react-redux";
import {
  changeService,
  addService,
  updateService,
  changeEditStatus,
} from "../redux/actionCreator";

export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeService(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (item.editId) {
      dispatch(
        updateService(item.editId, { name: item.name, price: item.price })
      );
      dispatch(changeEditStatus(""));
      dispatch(changeService("name", ""));
      dispatch(changeService("price", ""));
      return;
    }
    dispatch(addService(item.name, item.price));
    dispatch(changeService("name", ""));
    dispatch(changeService("price", ""));
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
    </form>
  );
}