//TODO: Este archivo contiene la pantalla donde estan los botones de llamado al mesero

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class Services extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={styles.containerHeader}
          >
            <View style={{ width: "10%" }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require("../images/flecha-izquierda.png")}
                  style={{ height: 25, width: 20 }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ width: "80%", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Image
                  source={require("../images/bandeja-de-comida.png")}
                  style={{ height: 25, width: 20 }}
                />
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  SERVICIOS
                </Text>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "space-around", margin: 20 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <View style={styles.buttons}>
                <Image
                  source={require("../images/cubiertos.png")}
                  style={styles.image}
                />
                <View style={styles.containerText}>
                  <Text style={styles.text}>LLAMAR</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.buttons}>
                <Image
                  source={require("../images/camareros.png")}
                  style={styles.image}
                />
                <View style={styles.containerText}>
                  <Text style={styles.text}>CUENTA</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
            >
              <View style={styles.buttons}>
                <Image
                  source={require("../images/cerrar.png")}
                  style={styles.image}
                />
                <View style={styles.containerText}>
                  <Text style={styles.text}>CANCELAR</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
    alignContent: "center",
  },
  buttons: {
    margin: 50,
    backgroundColor: "#FFE045",
    padding: 20,
    borderRadius: 80,
    marginBottom: 15,
    justifyContent: "space-around",
    height: 160,
  },
  image: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 75,
  },
});
