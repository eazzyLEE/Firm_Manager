import React from "react";
import { StyleSheet } from "react-native";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

const styles = StyleSheet.create({
  navBarStyle: {
    flex: 1,
    textAlign: "center"
  }
});

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            titleStyle={styles.navBarStyle}
            key="login"
            component={LoginForm}
            title="Login"
            initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            titleStyle={styles.navBarStyle}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            title="Create Employee"
            component={EmployeeCreate}
            title="Create Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
