import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function AchievementDetails({ route }) {
  const navigation = useNavigation();
  const { text, progress } = route.params;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <View style={styles.container}>
        <Text style={styles.unlockedText}>
          {progress === 100
            ? "UNBLOCKED A NEW ACHIEVEMENT"
            : `You have completed ${progress}% of this challenge`}
        </Text>
        {progress === 100 ? (
          <LottieView source={require("../assets/data.json")} autoPlay loop />
        ) : (
          <View style={styles.barContainer}>
            <View style={styles.progressBarInterior}>
              <View
                style={{ ...styles.progressBarExterior, width: progress * 3 }}
              />
            </View>
          </View>
        )}
      </View>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.dismiss}>Tap to dismiss</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { height: "100%", width: "100%" },
  barContainer: {
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  unlockedText: {
    fontWeight: "bold",
    marginTop: 80,
    width: "100%",
    padding: 40,
    textAlign: "center",
    fontSize: 50,
  },
  text: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    textAlign: "center",
    fontSize: 25,
    padding: 30,
  },
  progressBarInterior: {
    marginTop: 20,
    width: 300,
    height: 10,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
  progressBarExterior: {
    height: 10,
    backgroundColor: "limegreen",
    borderRadius: 10,
  },
  dismiss: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    textAlign: "center",
    fontSize: 12,
    padding: 10,
    color: "gray",
  },
});
