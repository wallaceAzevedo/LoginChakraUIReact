import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";

export default function route() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      
    </BrowserRouter>
  );
}