import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import graphqlClient from "./api/graphqlClient";
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
