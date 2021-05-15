import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://pbs.twimg.com/profile_images/1087449724783812611/6cqiEHCV.jpg",
          }}
        />
        <View style={styles.body}>
          <Text style={styles.name}>Amelia Morcillo</Text>
          <Text style={styles.info}>36/240 credits</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#a59bc8",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
    alignContent: "center",
  },
  body: {
    marginTop: 40,
    padding: 30,
    alignContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#e56a54",
  },
});
