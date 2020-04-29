import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
      <Counters></Counters>
    </React.Fragment>
  );
}

export default App;
