import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import _header from "./App/layout/_header";
import _sidebar from "./App/layout/_sidebar";
import Home from "./App/components/Home";
import Philia from "./App/components/Philia";
import Hospital from "./App/components/Hospital";
import { Route, Switch } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   alanBtn({
  //     className: "chat-plus-btn",
  //     key:"0ea827ac2712d63fc6ba9fadc5a62e202e956eca572e1d8b807a3e2338fdd0dc/prod",
  //     onCommand: (commandData) => {
  //       if (commandData.command === "go:back") {
  //       }
  //     },
  //     onConnectionStatus: async function (status) {
  //       if (status === 'authorized') {
  //         await alanBtnInstance.activate();
  //         alanBtnInstance.playText('WELCOME TO MASTA HEALTHCARE');
  //       }
  //     },
  //     position: "fixed",
  //     bottom: "25px",
  //     right: "40px",
  //     padding: "10px",
      
  //   });
  // }, []);

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
