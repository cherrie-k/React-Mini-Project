import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./components/App";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// browser를 위한 router를 임포트해옴. 이거로 App 컴포넌트 통으로 감싸주기.
import { HashRouter } from "react-router-dom";

import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
