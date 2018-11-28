import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "@firebase/app";
import "@firebase/auth";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      const config = {
        apiKey: "AIzaSyCtgJu9Rll0LWZLKUtq0AAWbNcM_hUyY-A",
        authDomain: "firm-manager.firebaseapp.com",
        databaseURL: "https://firm-manager.firebaseio.com",
        projectId: "firm-manager",
        storageBucket: "firm-manager.appspot.com",
        messagingSenderId: "440091515415"
      };
      firebase.initializeApp(config);
    }
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
