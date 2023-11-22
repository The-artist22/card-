import Product from "../components/Product";
import Signup from "../screens/Signup";
import login from "../screens/loginup";

import React from "react";

export const RouteList = [
  {
    path: "/Product",
    element: <Product />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/loginup",
    element: <login />,
  },
];
