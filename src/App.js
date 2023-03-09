import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Main from "./Main";
import React from "react";
import Done from "./done";
import Form from "./form";
import resim from "./images/img.png";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <div className="content"></div>
      </div>

      <div className="title">
        <h2>TURN FAILURE INTO CREATIVITY</h2>
      </div>
      <img src={resim} alt="" className="res" />

      <div>
        <NavLink className="menu" activeClassName="selected" to="/form">
          {" "}
          Choose Your Favorite Activty Type
        </NavLink>
      </div>
      <div>
        <NavLink className="menu" activeClassName="selected" to="/" exact>
          Random{" "}
        </NavLink>
        <NavLink className="menu" activeClassName="selected" to="/done">
          {" "}
          To Do List
        </NavLink>
      </div>

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/done" component={Done} />
        <Route path="/form" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
