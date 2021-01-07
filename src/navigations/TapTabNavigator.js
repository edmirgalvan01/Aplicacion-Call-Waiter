import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import AddButton from "../components/addButton";

const TabNavigator = createBottomTabNavigator(
  {
    Journal: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
        ),
      },
    },
    Measures: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
        ),
      },
    },
    Add: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: <AddButton />,
      },
    },
    Treatment: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="band-aid" size={24} color="#CDCCCE" />
        ),
      },
    },
    Profile: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="user" size={24} color="#CDCCCE" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);

export default createAppContainer(TabNavigator);
