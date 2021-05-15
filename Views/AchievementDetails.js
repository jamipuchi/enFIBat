import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function AchievementDetails() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <View style={styles.container}>
        <Text style={styles.unlockedText}>UNBLOCKED A NEW ACHIEVEMENT</Text>
        <LottieView source={require("../assets/data.json")} autoPlay loop />
        <Text
          style={{
            position: "absolute",
            bottom: 40,
            width: "100%",
            textAlign: "center",
            fontSize: 25,
            padding: 10,
          }}
        >
          You drank 10 liters of 🍺 at the bar
        </Text>
        <Text
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            textAlign: "center",
            fontSize: 12,
            padding: 10,
            color: "gray",
          }}
        >
          Tap to dismiss
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { height: "100%", width: "100%" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  unlockedText: {
    fontWeight: "bold",
    marginTop: 80,
    width: "100%",
    textAlign: "center",
    fontSize: 50,
  },
});
