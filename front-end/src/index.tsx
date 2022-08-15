// Global CSS
import "@styles/globals.scss";

import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { App } from "@components";

// React Router Dom
import { BrowserRouter } from "react-router-dom";

// Apollo
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
