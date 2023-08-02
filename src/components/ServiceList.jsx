import { useSelector, useDispatch } from "react-redux";
import {
  removeService,
  filterService,
  changeService,
  changeEditStatus,
} from "../redux/actionCreator";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const { filter } = useSelector((state) => state.serviceAdd);

  const dispatch = useDispatch();

  const handleFix = (key) => {
    const item = items.find((el) => el.id === key);
    dispatch(changeService("name", item.name));
    dispatch(changeService("price", item.price));
    dispatch(changeEditStatus(item.id));
  };

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleFilter = (evt) => {
    const filter = evt.target.value;
    dispatch(filterService(filter));
  };

  return (
    
    <>
      <input onChange={handleFilter} placeholder="sort..."></input>
      <ul>
        {items.filter((o) => o.name.includes(filter)).map((o) => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => handleFix(o.id)}><img src='https://w7.pngwing.com/pngs/420/658/png-transparent-computer-icons-pencil-drawing-pencil-angle-pencil-logo.png' alt='edit'></img></button>{" "}
          <button onClick={() => handleRemove(o.id)}>✕</button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}