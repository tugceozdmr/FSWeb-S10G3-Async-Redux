import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAct } from "./reduxStuff";

export default function Liked() {
  const likedFacts = useSelector((store) => store.likedFacts);
  const dispatch = useDispatch();

  return likedFacts.legth > 0 ? (
    <ul className="liked-list">
      {likedFacts.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => dispatch(deleteAct(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  ) : (
    <div className="empty-done">There's no to do</div>
  );
}
