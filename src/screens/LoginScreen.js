//TODO: Este archivo contiene la pantalla donde los usuarios pueden iniciar sesión con FB o google

import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import logo from "../images/logoo.png";
import IconFacebook from "../images/facebook.png";
import IconGoogle from "../images/google.png";
import { StatusBar } from "expo-status-bar";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <View style={{ padding: 15, width: "100%" }}>
            <TouchableOpacity>
              <View style={styles.buttonFacebook}>
                <Image source={IconFacebook} style={styles.Icons} />
                <Text style={styles.TextIcon}>Inicia sesión con Facebook</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={styles.buttonsSmall}
                onPress={() => this.props.navigation.navigate("InicioSesion")}
              >
                <Text style={styles.TextButtonSmall}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonsSmallOrange}
                onPress={() => this.props.navigation.navigate("Register")}
              >
                <Text style={styles.TextButtonSmallOrange}>Registrate</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.buttonGoogle}>
                <Image source={IconGoogle} style={styles.Icons} />
                <Text style={styles.TextIconGoogle}>
                  Inicia sesión con Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar hidden={true}></StatusBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: "center",
    padding: 0,
    margin: 0,
    justifyContent: "center",
    alignContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    height: "30%",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  logo: {
    height: 300,
    width: 300,
  },
  logoWl: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    marginTop: 100,
  },
  logoText: {
    color: "black",
    fontSize: 20,
    margin: 0,
  },
  buttonFacebook: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    padding: 20,
    backgroundColor: "#4267B2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Icons: {
    height: 30,
    width: 30,
    margin: 5,
  },
  TextIcon: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  buttonsSmall: {
    width: 150,
    height: 20,
    backgroundColor: "black",
    borderRadius: 25,
    padding: 20,
    margin: 10,
    justifyContent: "center",
  },
  TextButtonSmall: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    position: "absolute",
  },
  buttonsSmallOrange: {
    width: 150,
    height: 20,
    backgroundColor: "#FFE045",
    borderRadius: 25,
    padding: 20,
    margin: 10,
    justifyContent: "center",
  },
  TextButtonSmallOrange: {
    fontSize: 20,
    alignSelf: "center",
    position: "absolute",
    color: "black",
  },
  buttonGoogle: {
    width: "100%",
    height: 45,
    borderRadius: 25,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
  },
  TextIconGoogle: {
    color: "black",
    fontSize: 18,
    marginLeft: 20,
  },
});
