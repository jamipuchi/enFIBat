import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import mockJsonData from "../mockdata/achievements";

var RequiredImages = {
  1: {
    image: require("../assets/Welcome_to_enFIBat.png"),
  },
  2: {
    image: require("../assets/medal.png"),
  },
  3: {
    image: require("../assets/school.png"),
  },
  4: {
    image: require("../assets/friends.png"),
  },
  5: {
    image: require("../assets/school.png"),
  },
  31: {
    image: require("../assets/coding.png"),
  },
  32: {
    image: require("../assets/cpu.png"),
  },
  33: {
    image: require("../assets/calculations.png"),
  },
  34: {
    image: require("../assets/offer.png"),
  },
};

const cols = 3;
const marginHorizontal = 4;
const marginVertical = 125;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols + 1);
const height = width;

const achievements = [
  { subject: "IC", color: "#ffc72c" },
  { subject: "M1", color: "#e56a54" },
  { subject: "PRO1", color: "#6da04b" },
  { subject: "FIS", color: "#2f9fd0" },
];

export default function Achievements() {
  const [pantalla, setPantalla] = useState("pantalla principal");

  const renderAchievements = () => {
    if (pantalla === "pantalla principal") {
      return (
        <View style={styles.achievementView}>
          {mockJsonData.map((achievement) => (
            <View key={achievement.id}>
              <TouchableOpacity
                style={styles.boxContainer}
                onPress={() => {
                  setPantalla("primer semestre");
                  console.log(pantalla);
                }}
              >
                <Image
                  style={styles.image}
                  source={RequiredImages[achievement.id].image}
                ></Image>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
    }
    if (pantalla === "primer semestre") {
      return (
        <View style={styles.achievementView}>
          {mockJsonData[2].sub.map((achievement) => (
            <View key={achievement.id}>
              <View style={styles.boxContainer}>
                <Image
                  style={styles.image}
                  source={RequiredImages[achievement.id].image}
                ></Image>
              </View>
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>{renderAchievements()}</ScrollView>
    </View>
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
  scrollView: {
    width: "100%",
  },
  boxContainer: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 0,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    height: height,
  },
  achievementView: {
    flex: 1,
    flexWrap: "wrap",
    padding: 10,
    marginTop: 50,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
});
