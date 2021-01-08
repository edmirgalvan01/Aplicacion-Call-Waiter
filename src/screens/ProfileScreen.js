//TODO: Este archivo contiene la pantalla donde el usuario puede ver su perfil

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

export default class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              padding: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.containerHeader}>
              <View style={styles.containerTextMenu}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <FontAwesome5 name="user-circle" size={20} color="black" />
                  <Text style={styles.textMenu}>PERFIL</Text>
                </View>
              </View>
            </View>
            <View style={styles.containerImage}>
              <View style={styles.profileImage}>
                <Image
                  source={require("../images/profile1.jpg")}
                  style={styles.image}
                  resizeMode="center"
                ></Image>
              </View>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.textName}>Edmir Galván Vázquez</Text>
              <Text style={styles.textEmail}>edmirgalvaz@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.textButton}>Cerrar sesión</Text>
          </TouchableOpacity>

          <StatusBar barStyle="light-content" hidden={true}></StatusBar>
        </ScrollView>

        <View style={styles.fixedFooter}>
          <View style={styles.contentFooter}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <FontAwesome5 name="home" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
            >
              <FontAwesome5 name="qrcode" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <FontAwesome5 name="user-circle" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
  },
  textMenu: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    color: "#525750",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 108,
    overflow: "hidden",
  },
  containerImage: {
    alignSelf: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  infoContainer: {
    alignItems: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    alignSelf: "center",
    padding: 8,
    borderRadius: 15,
    marginTop: 20,
    backgroundColor: "#FFE045",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textName: {
    fontSize: 35,
    fontWeight: "bold",
  },
  textEmail: {
    fontSize: 20,
    color: "#8C8C8C",
  },
  fixedFooter: {
    backgroundColor: "#000",
    bottom: 0,
    left: 0,
    right: 0,
    height: 55,
    flexDirection: "row",
    width: "100%",
  },
  contentFooter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 5,
    alignItems: "center",
  },
});
