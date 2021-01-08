import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Product from "../components/Product";
import * as Animatable from "react-native-animatable";
import logoVips from "../images/logoVips.png";
import { FontAwesome5 } from "@expo/vector-icons";

export default class BibleViewer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerHeader}>
            <Text style={{ fontWeight: "bold", fontSize: 21 }}>
              ¡BIENVENIDOS!
            </Text>
          </View>
          <View style={styles.containerLogo}>
            <Animatable.Image
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              style={styles.animateLogo}
              source={require("../images/logoBlackWhite.png")}
            />
          </View>

          <View style={styles.containerRestaurantes}>
            <View style={styles.cards}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail")}
              >
                <Product title="TOKS" filter="Gourmet" logo={logoVips} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail")}
              >
                <Product title="VIPS" filter="Gourmet" logo={logoVips} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail")}
              >
                <Product title="CAVA" filter="Gourmet" logo={logoVips} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail")}
              >
                <Product title="CAVA" filter="Gourmet" logo={logoVips} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail")}
              >
                <Product title="FAJA" filter="Gourmet" logo={logoVips} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail")}
              >
                <Product title="VIPS" filter="Gourmet" logo={logoVips} />
              </TouchableOpacity>
            </View>
          </View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    padding: 0,
  },
  text: {
    marginBottom: 60,
  },
  containerHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 5,
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
  containerLogo: {
    backgroundColor: "black",
  },
  animateLogo: {
    width: 100,
    height: 100,
    margin: 30,
    alignSelf: "center",
    resizeMode: "contain",
  },
  containerRestaurantes: {
    borderColor: "white",
    borderWidth: 15,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  restaurantCard: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
  },
  cards: {
    alignItems: "center",
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
