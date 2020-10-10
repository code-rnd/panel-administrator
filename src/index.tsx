import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="page">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
