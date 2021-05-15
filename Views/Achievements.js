import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const mockAchievements = [
  {
    name: "Welcome to enFIBat",
    image: require("../assets/chevron-1.png"),
    progress: 100,
  },
  {
    name: "First course enrolled",
    image: require("../assets/chevron-11.png"),
    progress: 100,
  },
  {
    name: "First Semester completed",
    image: require("../assets/chevron-3.png"),
    progress: 100,
  },
  {
    name: "Second Semester completed",
    image: require("../assets/chevron-4.png"),
    progress: 100,
  },
  {
    name: "Third Semester completed",
    image: require("../assets/chevron-5.png"),
    progress: 40,
  },
  {
    name: "10 launches eaten at the bar",
    image: require("../assets/chevron-12.png"),
    progress: 30,
  },
  {
    name: "Second Year completed",
    image: require("../assets/chevron-17.png"),
    progress: 50,
  },
];

export default function Achievements() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.badgeContainer}>
        {mockAchievements.map((ach) => (
          <TouchableOpacity
            key={ach.name}
            style={styles.badge}
            onPress={() =>
              navigation.push("AchievementDetails", {
                text: ach.name,
                progress: ach.progress,
              })
            }
          >
            <Image style={styles.badgeImage} source={ach.image} />
            <View style={styles.progressBarInterior}>
              <View
                style={{ ...styles.progressBarExterior, width: ach.progress }}
              />
            </View>
            <Text style={styles.badgeText}>{ach.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  badgeImage: {
    width: 80,
    height: 80,
  },
  badge: {
    alignItems: "center",
    width: 130,
    height: 210,
  },
  badgeText: {
    marginTop: 10,
    textAlign: "center", // <-- the magic
  },
  badgeContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  progressBarInterior: {
    marginTop: 20,
    width: 100,
    height: 5,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
  progressBarExterior: {
    height: 5,
    backgroundColor: "limegreen",
    borderRadius: 10,
  },
});
