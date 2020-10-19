import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import _header from "./App/layout/_header";
import _sidebar from "./App/layout/_sidebar";
import Home from "./App/components/Home";
import Philia from "./App/components/Philia";
import Hospital from "./App/components/Hospital";
import { Route, Switch } from "react-router-dom";
import ReactGa from "react-ga";

ReactGa.initialize("UA-180964272-1");

function App() {
  useEffect(() => {
    let alanBtnInstance = alanBtn({
      key:"0ea827ac2712d63fc6ba9fadc5a62e202e956eca572e1d8b807a3e2338fdd0dc/prod",
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      },
      onConnectionStatus: async function (status) {
        if (status === 'authorized') {
          await alanBtnInstance.activate();
          alanBtnInstance.playText('Good morning Phil Odinga , I\'m Philia, your personal medical assistant. what can I do for you today?');
          // await alanBtnInstance.deactivate();
        }
      },
      position: "fixed",
      bottom: "25px",
      right: "40px",
      padding: "10px",
    });
  }, []);
  return (
      <div id="wrapper">
        <_sidebar></_sidebar>
        <_header></_header>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/home" component={Home} />
          <Route  exact={true} path="/recipe" component={Philia} />
          <Route exact={true} path="/nearest-hospital" component={Hospital} />
          <Route component={Home} />
        </Switch>
      </div>
  );
}
export default App;
