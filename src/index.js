import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import firebase from 'firebase/app';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import App from "scenes/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "scss/main.css";

// Add social media icons
library.add(faBars, faTimes);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCtWTweCtNXjW_WjYfW59T9IG-upFejw2k",
  authDomain: "by-forte-test.firebaseapp.com",
  databaseURL: "https://by-forte-test.firebaseio.com",
  projectId: "by-forte-test",
  storageBucket: "by-forte-test.appspot.com",
  messagingSenderId: "652878859375"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
