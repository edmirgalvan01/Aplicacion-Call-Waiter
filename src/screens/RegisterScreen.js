//TODO: Este archivo contiene la pantalla donde el usuario puede registrarse

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

import main from "../images/main.png";
import logo from "../images/logoBlackWhite.png";
import IconGoogle from "../images/googleColor.png";
import IconFacebook from "../images/facebookColor.png";

const { width: WIDTH } = Dimensions.get("window");

export default class RegisterScreen extends Component {
  render() {
    return (
      <View source={main} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Animatable.Image
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={{
              width: 150,
              height: 150,
              margin: 30,
              resizeMode: "contain",
            }}
            source={logo}
          />
          <Text style={styles.logotext}>REGISTRATE</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.inputContainer}>
            <Image style={styles.inputImg} />
            <TextInput
              style={styles.input}
              placeholder={"Nombre de usuario"}
              placeholderTextColor={"black"}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputImg} />
            <TextInput
              style={styles.input}
              placeholder={"Correo electrónico"}
              secureTextEntry={true}
              placeholderTextColor={"black"}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputImg} />
            <TextInput
              style={styles.input}
              placeholder={"Contraseña"}
              secureTextEntry={true}
              placeholderTextColor={"black"}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputImg} />
            <TextInput
              style={styles.input}
              placeholder={"Confirma tu contraseña"}
              secureTextEntry={true}
              placeholderTextColor={"black"}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.Socials}>
            <TouchableOpacity>
              <View style={styles.buttonGoogle}>
                <Image source={IconGoogle} style={styles.Icons} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.buttonGoogle}>
                <Image source={IconFacebook} style={styles.Icons} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.finishContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Prueba")}
            >
              <Text style={styles.finish}>REGISTRARSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },
  logoContainer: {
    alignItems: "center",
    height: "50%",
    width: "100%",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 150,
    height: 10,
  },
  logotext: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  buttonsContainer: {
    height: "50%",
    justifyContent: "center",
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 25,
  },
  inputContainer: {
    marginTop: 10,
  },
  buttonGoogle: {
    width: "100%",
    height: 45,
    borderRadius: 25,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  Icons: {
    height: 40,
    width: 40,
    margin: 5,
  },
  Socials: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,
  },
  finishContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  finish: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#FFE045",
    borderRadius: 20,
    padding: 8,
    borderColor: "black",
    borderWidth: 1,
    color: "black",
  },
});
