import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { screenOptions } from "./ScreenOptions";
import { useSelector } from "react-redux";

import Home from "../views/screens/home/Home";
import Login from "../views/screens/login/Login";
import Register from "../views/screens/register/Register";

const Stack = createStackNavigator();

const AuthStackNavigation = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {user ? (
          <React.Fragment>
            <Stack.Screen name="HOME" component={Home} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen name="LOGIN" component={Login} />
            <Stack.Screen name="REGISTER" component={Register} />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigation;
