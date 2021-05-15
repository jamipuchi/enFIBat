import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SubjectForm() {
  return (
    <TouchableOpacity
      style={{ height: "100%", width: "100%" }}
      onPress={() => console.log("Desbloqueado")}
    >
      <View style={{ height: "100%", width: "100%" }}>
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 80,
            width: "100%",
            textAlign: "center",
            fontSize: 50,
          }}
        >
          UNBLOCKED A NEW ACHIEVEMENT
        </Text>
        <LottieView source={require("../assets/data.json")} autoPlay loop />
        <Text
          style={{
            position: "absolute",
            bottom: 25,
            width: "100%",
            textAlign: "center",
            fontSize: 25,
            padding: 10,
          }}
        >
          You drank 10 liters of 🍺 at the bar 
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
