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
import Product from "../components/Product";
import * as Animatable from "react-native-animatable";
import logoVips from "../images/logoVips.png";

export default class PruebaMenu extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={{ width: "10%" }}></View>
          <View style={styles.containerTextMenu}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text style={styles.textMenu}>¡BIENVENIDOS!</Text>
            </View>
          </View>
        </View>

        {
          <View style={styles.containerLogo}>
            <Animatable.Image
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              style={styles.animateLogo}
              source={require("../images/logoBlackWhite.png")}
            />
          </View>
        }

        <View style={styles.containerRestaurantes}>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 5,
  },
  icons: {
    height: 25,
    width: 20,
  },
  ubicacion: {
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
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
  /*  containerTitleRestaurantes: {
    alignItems: "center",
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
  }, */
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
