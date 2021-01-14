//TODO: Este archivo contiene el producto individual que se muestra en el home

import React from "react";
import { View, Image, Text } from "react-native";

export default class Product extends React.Component {
  render() {
    return (
      <View
        elevation={7}
        style={{
          margin: 10,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 10,
          backgroundColor: "#FFE045",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../images/restaurant.jpg")}
          style={{ height: 150, width: 240, borderRadius: 20 }}
        />
        <View
          style={{
            padding: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            {this.props.title}
          </Text>
          <Text style={{ fontSize: 18, color: "#020202" }}>
            {this.props.filter}
          </Text>
        </View>
      </View>
    );
  }
}
