import React, { useState, useEffect } from "react";
import "./App.css";
import {Login} from "./pages/Login.js"
import {MainPage} from "./pages/MainPage.js"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  Routes
} from "react-router-dom";


function App(){

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
