import React, { useState } from "react";
import "./form.css";

export default function Form(props) {
  const [choose, SetChoose] = useState({
    name: "",
  });

  const arr = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  return (
    <div className="title">
      <div className="fav">
        <label>
          <input
            type="radio"
            value={choose.name}
            id="act0"
            name="act0"
            //checked={choose.name === arr[0]}
            //onChange={handleInputChange}
          />
          {arr[0]}
        </label>
        <label>
          <input
            type="radio"
            value={choose.name}
            id="act1"
            name="act1"
            //checked={choose.name === arr[1]}
            //onChange={handleInputChange}
          />
          {arr[1]}
        </label>

        <label>
          <input
            type="radio"
            value={choose.name}
            id="act2"
            name="act2"
            //checked={choose.name === arr[2]}
            //onChange={handleInputChange}
          />
          {arr[2]}
        </label>
        <br/>
        <label>
          <input
            type="radio"
            value={choose.name}
            id="act3"
            name="act3"
            //checked={choose.name === arr[2]}
            //onChange={handleInputChange}
          />
          {arr[3]}
        </label>
       
        <label>
          <input
            type="radio"
            value={choose.name}
            id="act4"
            name="act4"
            //checked={choose.name === arr[2]}
            //onChange={handleInputChange}
          />
          {arr[4]}
        </label>
        <label>
          <input
            type="radio"
            value={choose.name}
            id="act5"
            name="act5"
            //checked={choose.name === arr[2]}
            //onChange={handleInputChange}
          />
          {arr[5]}
        </label>
        <br/>
        <label>
          <input
            type="radio"
            value={choose.name}
            id="act6"
            name="act6"
            //checked={choose.name === arr[2]}
            //onChange={handleInputChange}
          />
          {arr[6]}
        </label>
        <label>
          <input
            type="radio"
            value={choose.name}
            id="act7"
            name="act7"
            //checked={choose.name === arr[2]}
            //onChange={handleInputChange}
          />
          {arr[7]}
        </label>
        <label>
          <input
            type="radio"
            value={choose.name}
            id="act8"
            name="act8"
            //checked={choose.name === arr[2]}
            //onChange={handleInputChange}
          />
          {arr[8]}
        </label>
        <label>
          <input
            type="radio"
            value={choose.name}
            id="act9"
            name="act9"
            //checked={choose.name === arr[2]}
            //onChange={handleInputChange}
          />
          {arr[9]}
        </label>
      </div>
      {alert("choose it")}
    </div>
  );
}
