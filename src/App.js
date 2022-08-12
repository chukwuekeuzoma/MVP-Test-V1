import React from "react";
import HomeLayout from "./Layouts/HomeLayout";
import {AllProjectsAllGateWays} from "./Pages"
import Screen from "./Screen/Screen";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function RouteWithLayout({ Layout, Component, ...rest }) {
  return (
    <Layout {...rest}>
      <Component {...rest} />
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
       <Routes>
       <Route
            path="/"
            element={
              <RouteWithLayout Layout={HomeLayout} Component={Screen} />
            }
          />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
