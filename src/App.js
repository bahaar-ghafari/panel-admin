import React from "react";
import "./App.css";
import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Appbar />
        <div className="content">
          <Sidebar />
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
