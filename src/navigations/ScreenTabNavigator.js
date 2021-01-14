import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/ProfileScreen";
import Menu from "../screens/Detail";

function TabsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: () => Home,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#CDCCCE" />,
    },
  },
  Menu: {
    screen: () => Menu,
    navigationOptions: {
      tabBarIcon: () => (
        <FontAwesome5 name="qrcode" size={24} color="#CDCCCE" />
      ),
    },
  },
  Profile: {
    screen: () => Profile,
    navigationOptions: {
      tabBarIcon: () => (
        <FontAwesome5 name="user-circle" size={24} color="#CDCCCE" />
      ),
    },
  },
});

export default createAppContainer(TabNavigator);
