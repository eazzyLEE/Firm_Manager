import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "@firebase/app";
import "@firebase/auth";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
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
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
