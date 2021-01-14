import React, { Component } from "react";
import { Button } from "react-native";
import { Text, View, StyleSheet, Alert } from "react-native";

export default class QrScreen extends Component {
  saludo = () => {
    Alert.alert("Hola mundo");
  };

  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
