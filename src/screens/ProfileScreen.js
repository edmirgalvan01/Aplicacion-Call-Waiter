//TODO: Este archivo contiene la pantalla donde el usuario puede ver su perfil

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingBottom: 15 }}>
            <View style={styles.titleBar}>
              <TouchableOpacity
                style={{ margin: 5 }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Ionicons
                  name="ios-arrow-back"
                  size={30}
                  color="black"
                ></Ionicons>
              </TouchableOpacity>
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
});
