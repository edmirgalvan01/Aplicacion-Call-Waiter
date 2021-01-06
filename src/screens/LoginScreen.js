//TODO: Este archivo contiene la pantalla donde los usuarios pueden iniciar sesión con FB o google

import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import logo from "../images/logoo.png";
import IconFacebook from "../images/facebook.png";
import IconGoogle from "../images/google.png";
import LogoWL from "../images/webLand.png";

export default class LoginScreen extends Component {
  render() {
    return (
      <View /* source={main} */ style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>¡Sistema mas rápido!</Text>
        </View>

        <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableOpacity>
            <View style={styles.buttonFacebook}>
              <Image source={IconFacebook} style={styles.Icons} />
              <Text style={styles.TextIcon}>Inicia sesión con Facebook</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
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
          <View style={styles.logoContainer}>
            <Image source={LogoWL} style={styles.logoWl} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    height: null,
    width: null,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    height: 300,
    width: 300,
    marginTop: 50,
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
    margin: 20,
  },
  buttonFacebook: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    padding: 20,
    backgroundColor: "#4267B2",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  Icons: {
    height: 30,
    width: 30,
    margin: 5,
  },
  TextIcon: {
    color: "white",
    fontSize: 25,
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
  },
  TextIconGoogle: {
    color: "black",
    fontSize: 25,
    marginLeft: 20,
  },
});
