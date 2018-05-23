import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import * as firebase from "firebase";

import App from "scenes/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "scss/main.css";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDQC55nWiuHoR2uChUafiFWaYGVH2ecPvI",
  authDomain: "by-forte.firebaseapp.com",
  databaseURL: "https://by-forte.firebaseio.com",
  projectId: "by-forte",
  storageBucket: "by-forte.appspot.com",
  messagingSenderId: "622359278063"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
