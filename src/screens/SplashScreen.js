//TODO: Este archivo contiene la pantalla de carga de la app

import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { ImageBackgroundStyle } from "../styles/General";
import { StatusBar } from "expo-status-bar";

export default class SplashScreen extends Component {
  gotoScreen(routeName) {
    this.props.navigation.navigate(routeName);
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.gotoScreen("Login");
      },
      2000,
      this
    );
  }

  render() {
    return (
      <View style={ImageBackgroundStyle.image}>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <Text
            style={{ fontSize: 30, fontWeight: "bold", alignSelf: "center" }}
          >
            BIENVENIDOS
          </Text>
          <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
          <Animatable.Image
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={{
              width: 300,
              height: 300,
              margin: 30,
              alignSelf: "center",
            }}
            source={require("../images/logo.png")}
          />
          <View
            style={{
              alignSelf: "center",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                position: "absolute",
                marginTop: 5,
              }}
            >
              Powered by
            </Text>
            <Image
              source={require("../images/webLand.png")}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                flexDirection: "row",
                alignSelf: "center",
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
