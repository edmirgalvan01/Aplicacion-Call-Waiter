import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Product from "../components/Product";
import * as Animatable from "react-native-animatable";
import logoVips from "../images/logoVips.png";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{}}>
          <View
            style={{
              flex: 0.8,
              justifyContent: "center",
              alignItems: "center",
              height: 60,
            }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                ¡BIENVENIDOS!
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "black",
              flex: 2.1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ height: 130, justifyContent: "center" }}>
              <Animatable.Image
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                style={{
                  width: 80,
                  height: 80,
                  resizeMode: "contain",
                }}
                source={require("../images/logoBlackWhite.png")}
              />
            </View>
          </View>
          <View style={{ flex: 9, alignItems: "center" }}>
            <View style={{ width: "85%" }}>
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
        </ScrollView>

        <View
          style={{
            backgroundColor: "#000",
            bottom: 0,
            left: 0,
            right: 0,
            height: 55,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              padding: 5,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <FontAwesome5 name="home" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("QrScreen")}
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
    padding: 0,
  },
});
