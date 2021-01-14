/* import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class QrScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.containerTextMenu}>
            <FontAwesome5 name="qrcode" size={20} color="black" />
            <Text style={styles.textMenu}>Código QR</Text>
          </View>
        </View>
        <View style={styles.containerBody}>
          <View style={styles.containerQR}>
            <View style={styles.containerCamera}></View>
            <View style={styles.containerTexts}>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.text1}>
                  ¡Gracias por ocupar Call Waiter!
                </Text>
              </View>
              <View style={{ alignSelf: "center", padding: 5 }}>
                <Text style={styles.text2}>
                  En tu mesa tendrás un código QR, escanealo desde aquí para que
                  un mesero pueda saber que estas presente.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 0,
    padding: 0,
  },
  containerHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 20,
    padding: 5,
    marginBottom: 10,
  },
  icons: {
    height: 25,
    width: 20,
  },
  containerTextMenu: {
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  textMenu: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  containerBody: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerQR: {
    backgroundColor: "#C2BFBF",
    width: "90%",
    height: "90%",
    marginTop: 10,
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerCamera: {
    width: "90%",
    height: "60%",
    margin: 10,
    marginTop: 25,
    borderRadius: 15,
    borderWidth: 2,
  },
  containerTexts: {
    backgroundColor: "#FFE045",
    width: "90%",
    height: "20%",
    borderRadius: 15,
    marginBottom: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  text1: {
    fontSize: 23,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  text2: {
    fontSize: 18,
    textAlign: "center",
  },
});
 */

import React, { Component } from "react";
import { Button } from "react-native";
import { Text, View, StyleSheet, Alert } from "react-native";

export default class QrScreen extends Component {
  saludo = () => {
    Alert.alert("Hola mundo");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.uno}>
          <View style={styles.left}>
            <Button onPress={this.saludo} title="Login" style={{ flex: 1 }} />
          </View>
          <View style={styles.right}>
            <Button onPress={this.saludo} title="Login" style={{ flex: 1 }} />
          </View>
        </View>

        <View style={styles.dos}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                padding: 0,
                alignItems: "center",
                marginTop: 15,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "90%",
                  backgroundColor: "blue",
                }}
              >
                <Text>Hola</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  uno: {
    flex: 1,
    flexDirection: "row",
  },
  left: {
    flex: 1,
    backgroundColor: "yellow",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 1,
    backgroundColor: "gold",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dos: {
    flex: 9,
    backgroundColor: "green",
  },
});
