import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line
import "swiper/css/bundle";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/user/AuthProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
  // </React.StrictMode>
);
