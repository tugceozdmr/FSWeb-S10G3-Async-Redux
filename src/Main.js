import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ComplaitAct } from "./reduxStuff";

export default function Main() {
  const [act, setAct] = useState("");
  const myDispatch = useDispatch();

  function actGetir() {
    axios.get("https://www.boredapi.com/api/activity").then((response) => {
      if (response.status === 200) {
        setAct(response.data.act);
      }
    });
  }

  useEffect(() => {
    actGetir;
  }, []);

  function handleDone() {
    myDispatch(ComplaitAct(act));
  }

  return (
    <div className="act">
      <p>{act}</p>
      <button onClick={handleDone}> To Do</button>
      <button onClick={actGetir}> Next</button>
    </div>
  );
}
