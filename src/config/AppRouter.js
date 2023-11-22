import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RouteList } from "../utilis/RouteList";
import React from "react";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {RouteList.map((element, i) => {
          return (
            <Route key={i} path={element.path} element={element.element} />
          );
        })}
      </Routes>
    </Router>
  );
};
