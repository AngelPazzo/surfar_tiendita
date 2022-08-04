import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpK4yJOk4VGFUI4Fza88yr10CYo5VvuOU",
  authDomain: "surfar-shop.firebaseapp.com",
  projectId: "surfar-shop",
  storageBucket: "surfar-shop.appspot.com",
  messagingSenderId: "472039000996",
  appId: "1:472039000996:web:86e51108218bb0c5870f31"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
