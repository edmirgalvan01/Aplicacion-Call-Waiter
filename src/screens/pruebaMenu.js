import React from "react";
import {
  View,
  Image,
  Picker,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import Product from "../components/Product";
import * as Animatable from "react-native-animatable";

import logoVips from "../images/logoVips.png";

export default class PruebaMenu extends React.Component {
  state = {
    city: "Poza Rica",
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "black" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 40,
            /* marginHorizontal:20, */
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <View>
            <SafeAreaView style={{ flex: 1 }}>
              <TouchableOpacity
                style={{
                  alignItems: "flex-start",
                  marginTop: 15,
                  marginLeft: 8,
                }}
                onPress={this.props.navigation.openDrawer}
              >
                <FontAwesome5 name="bars" size={25} color="#161924" />
              </TouchableOpacity>
            </SafeAreaView>
          </View>

          <View
            style={{
              width: "80%",
              alignItems: "center",
            }}
          >
            <Picker
              selectedValue={this.state.city}
              style={{ height: 50, width: 160 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ city: itemValue })
              }
            >
              <Picker.Item
                label="POZA RICA, VER."
                value="POZA RICA, VER."
                style={{ fontWeight: "bold" }}
              />
            </Picker>
          </View>

          <View style={{ width: "10%" }}>
            <Image
              source={require("../images/logo.png")}
              style={{ height: 60, width: 60 }}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "black",
          }}
        >
          <Animatable.Image
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={{
              width: 100,
              height: 100,
              margin: 30,
              alignSelf: "center",
              resizeMode: "contain",
            }}
            source={require("../images/logoBlackWhite.png")}
          />
        </View>

        <View
          style={{
            borderColor: "black",
            borderWidth: 15,
            borderRadius: 25,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginHorizontal: 20,
              flexDirection: "row",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <View
              style={{
                width: "50%",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                Restaurantes
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                alignItems: "flex-end",
              }}
            ></View>
          </View>

          <View style={styles.cards}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
            >
              <Product
                image={require("../images/restaurant.jpg")}
                title="TOKS"
                filter="Gourmet"
                logo={logoVips}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
            >
              <Product
                image={require("../images/9.png")}
                title="VIPS"
                filter="Gourmet"
                logo={logoVips}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
            >
              <Product
                image={require("../images/9.png")}
                title="CAVA"
                filter="Gourmet"
                logo={logoVips}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
            >
              <Product
                image={require("../images/9.png")}
                title="CAVA"
                filter="Gourmet"
                logo={logoVips}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
            >
              <Product
                image={require("../images/9.png")}
                title="FAJA"
                filter="Gourmet"
                logo={logoVips}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
            >
              <Product
                image={require("../images/9.png")}
                title="VIPS"
                filter="Gourmet"
                logo={logoVips}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
    height: "100%",
    width: "100%",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
  slider: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  textSlider: {
    color: "#161924",
    fontSize: 20,
    fontWeight: "500",
  },
});
