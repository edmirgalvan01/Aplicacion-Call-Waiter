//TODO: Este archivo contiene el producto individual que se muestra en el home

import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class Product extends React.Component {
  render() {
    return (
      <View
        elevation={7}
        style={{
          margin: 10,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 5,
          backgroundColor: "#FFE045",
        }}
      >
        <Image
          source={require("../images/restaurant.jpg")}
          style={{ height: 180, width: 350, borderRadius: 20 }}
        />
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 33, fontWeight: "bold" }}>
            {" "}
            {this.props.title}{" "}
          </Text>
          <Text style={{ fontSize: 20, color: "#020202" }}>
            {" "}
            {this.props.filter}{" "}
          </Text>
        </View>
      </View>
    );
  }
}

