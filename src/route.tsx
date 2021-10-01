import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/login";

import Home from "./pages/Home";

export default function route() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Login" component ={Login}/>
    </BrowserRouter>
  );
}