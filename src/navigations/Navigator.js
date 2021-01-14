//TODO: Este archivo vincula todas las pantallas para poder navegar atraves de ellas

import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailScreen from "../screens/Detail";
import ServicesScreen from "../screens/Services";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import InicioSesionScreen from "../screens/InicioSesionScreen";
import Home from "../screens/Home";
import ProfileScreen from "../screens/ProfileScreen";
import QrScreen from '../screens/QrScreen'

const AppNavigation = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Services: {
    screen: ServicesScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  InicioSesion: {
    screen: InicioSesionScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  QrScreen: {
    screen: QrScreen,
    navigationOptions: {
      headerShown: false,
    },
  }
});

const screenOptionStyle = {
  headerShown: false,
};

export default createAppContainer(AppNavigation);
