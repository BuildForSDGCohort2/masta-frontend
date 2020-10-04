import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import _header from "./App/layout/_header";
import _sidebar from "./App/layout/_sidebar";
import Home from "./App/components/Home";
import Philia from "./App/components/Philia";
import Error from "./App/components/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  useEffect(() => {
    alanBtn({
      key:
        "0ea827ac2712d63fc6ba9fadc5a62e202e956eca572e1d8b807a3e2338fdd0dc/prod",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
        }
      },
    });
  }, []);

  return (
    <>
      <div id="wrapper">
        <_sidebar />
        <_header />
        <Switch>
          <Route exact path="/" component={Home} forceRefresh/>
          <Route exact path="/home" component={Home} forceRefresh/>
          <Route exact path="/recipe" component={Philia} forceRefresh/>
          <Route exact path="/404" component={Error} forceRefresh/>
          <Route exact component={Home} forceRefresh/>
          <Route exact component={Philia} forceRefresh/>
          <Route exact component={Error} forceRefresh/>
        </Switch>
      </div>
    </>
  );
}
export default App;
