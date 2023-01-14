import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import reportWebVitals from "./reportWebVitals";

//Add these lines
Sentry.init({
  dsn: "https://aca531443fbd4cb0bc8e2d00e80a75c0@o4504484017471488.ingest.sentry.io/4504487438188544",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
