//TODO: En este archivo se encuentra el producto individual del home

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo";
import BottomNavigation, {
  FullTab,
} from "react-native-material-bottom-navigation";

export default class Detail extends React.Component {
  /* state = {
    quantity: 1,
  };

  addQuantity = (quantity) => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  subtractQuantity = (quantity) => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  }; */

  render() {
    return (
      <View style={{ backgroundColor: "#FFF" }}>
        <ScrollView>
          <View style={style.containerHeader}>
            <View style={{ width: "10%" }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require("../images/flecha-izquierda.png")}
                  style={style.icons}
                />
              </TouchableOpacity>
            </View>
            <View style={style.containerTextMenu}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../images/menu.png")}
                  style={style.icons}
                />
                <Text style={style.textMenu}>MENÚ</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Services")}
            >
              <Image
                source={require("../images/bandeja-de-comida.png")}
                style={style.icons}
              />
            </TouchableOpacity>
          </View>

          <View style={{alignItems:"center"}}>
            <View style={style.foodCard}>
              <Image
                source={require("../images/comida1.jpg")}
                style={style.foodImage}
              />
              <View style={style.detailContainer}>
                <View>
                  <Text style={style.foodName}>Hola</Text>
                  <Text style={style.foodSpeciality}>Beef burger</Text>
                </View>
                <Text style={style.foodPrice}>$12.99</Text>
              </View>
            </View>

            <View style={style.foodCard}>
              <Image
                source={require("../images/comida1.jpg")}
                style={style.foodImage}
              />
              <View style={style.detailContainer}>
                <View>
                  <Text style={style.foodName}>Hola</Text>
                  <Text style={style.foodSpeciality}>Beef burger</Text>
                </View>
                <Text style={style.foodPrice}>$12.99</Text>
              </View>
            </View>

            <View style={style.foodCard}>
              <Image
                source={require("../images/comida1.jpg")}
                style={style.foodImage}
              />
              <View style={style.detailContainer}>
                <View>
                  <Text style={style.foodName}>Hola</Text>
                  <Text style={style.foodSpeciality}>Beef burger</Text>
                </View>
                <Text style={style.foodPrice}>$12.99</Text>
              </View>
            </View>

            <View style={style.foodCard}>
              <Image
                source={require("../images/comida1.jpg")}
                style={style.foodImage}
              />
              <View style={style.detailContainer}>
                <View>
                  <Text style={style.foodName}>Hola</Text>
                  <Text style={style.foodSpeciality}>Beef burger</Text>
                </View>
                <Text style={style.foodPrice}>$12.99</Text>
              </View>
            </View>

            <View style={style.foodCard}>
              <Image
                source={require("../images/comida1.jpg")}
                style={style.foodImage}
              />
              <View style={style.detailContainer}>
                <View>
                  <Text style={style.foodName}>Hola</Text>
                  <Text style={style.foodSpeciality}>Beef burger</Text>
                </View>
                <Text style={style.foodPrice}>$12.99</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
    padding:5,
    marginBottom:10
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
  foodCard: {
    margin: 50,
    marginTop:0,
    width: "80%",
    padding: 20,
    borderRadius: 30,
    marginBottom: 0,
    justifyContent: "center",
    alignItems:"center"
  },
  foodImage: {
    height: 220,
    width: 330,
    alignSelf: "center",
    resizeMode: "contain",
    borderRadius:25
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor:"black",
    borderBottomColor:"black",
    backgroundColor: "#FFE045",
    borderRadius:10,
    width: 330,
    padding:15
  },
  foodName: {
    fontWeight: "bold",
    fontSize: 25,
  },
  foodSpeciality: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#a4a4a9",
  },
  foodPrice: {
    fontWeight: "bold",
    fontSize: 28,
    marginLeft: 80,
  },
});
