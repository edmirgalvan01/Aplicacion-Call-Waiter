import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo";
import BottomNavigation, {
  FullTab,
} from "react-native-material-bottom-navigation";

const style = StyleSheet.create({
  foodCard: {
    margin: 50,
    backgroundColor: "#FFE045",
    padding: 20,
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default class Detail extends React.Component {
  /*     state={
        quantity:1
    }

    addQuantity = (quantity) => {
        this.setState({quantity: this.state.quantity + 1});
    }
    subtractQuantity = (quantity) => {
      if (this.state.quantity > 0) {
        this.setState({quantity: this.state.quantity - 1});
      }
       
    } */

  render() {
    return (
      <View style={{ backgroundColor: "#FFF" }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 40,
              marginHorizontal: 20,
            }}
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
                  source={require("../images/menu.png")}
                  style={{ height: 25, width: 20 }}
                />
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  MENÚ
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Services")}
            >
              <Image
                source={require("../images/bandeja-de-comida.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>

          <View style={style.foodCard}>
            <Image
              source={require("../images/5.png")}
              style={{
                height: 270,
                width: 270,
                alignSelf: "center",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 20,
                marginTop: 30,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                  }}
                >
                  Hola
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#a4a4a9",
                  }}
                >
                  Beef burger
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 28,
                  marginLeft: 80,
                }}
              >
                $12.99
              </Text>
            </View>
          </View>

          <View style={style.foodCard}>
            <Image
              source={require("../images/5.png")}
              style={{
                height: 270,
                width: 270,
                alignSelf: "center",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 20,
                marginTop: 30,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                  }}
                >
                  Hola{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#a4a4a9",
                  }}
                >
                  Beef burger
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 28,
                  marginLeft: 80,
                }}
              >
                $12.99
              </Text>
            </View>
          </View>

          <View style={style.foodCard}>
            <Image
              source={require("../images/5.png")}
              style={{
                height: 270,
                width: 270,
                alignSelf: "center",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 20,
                marginTop: 30,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                  }}
                >
                  Hola{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#a4a4a9",
                  }}
                >
                  Beef burger
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 28,
                  marginLeft: 80,
                }}
              >
                $12.99
              </Text>
            </View>
          </View>

          <View style={style.foodCard}>
            <Image
              source={require("../images/5.png")}
              style={{
                height: 270,
                width: 270,
                alignSelf: "center",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 20,
                marginTop: 30,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                  }}
                >
                  Hola{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#a4a4a9",
                  }}
                >
                  Beef burger
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 28,
                  marginLeft: 80,
                }}
              >
                $12.99
              </Text>
            </View>
          </View>

          <View style={style.foodCard}>
            <Image
              source={require("../images/5.png")}
              style={{
                height: 270,
                width: 270,
                alignSelf: "center",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 20,
                marginTop: 30,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                  }}
                >
                  Hola{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#a4a4a9",
                  }}
                >
                  Beef burger
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 28,
                  marginLeft: 80,
                }}
              >
                $12.99
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
