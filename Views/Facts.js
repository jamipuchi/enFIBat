import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import mockJsonData from "../mockdata/facts.json";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";

const colors = [
  "#03071eff",
  "#370617ff",
  "#6a040fff",
  "#9d0208ff",
  "#d00000ff",
  "#dc2f02ff",
  "#e85d04ff",
  "#f48c06ff",
  "#faa307ff",
  "#ffba08ff",
];

export default function Facts() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.factContainer}>
        {mockJsonData.map((fac, index) => (
          <TouchableOpacity
            key={fac.title}
            style={{ ...styles.fact, backgroundColor: colors[index] }}
            onPress={() =>
              navigation.push("FactsDetails", {
                title: fac.title,
                text: fac.description,
                link: fac.link,
                image: fac.image,
              })
            }
          >
            <Icon
              style={styles.icon}
              name="exclamation"
              type="evilicon"
              color="white"
            />
            <Text style={styles.factText}>{fac.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fact: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "red",
    borderRadius: 20,
    marginBottom: 5,
  },
  factText: {
    marginTop: 5,
    alignItems: "center",
    color: "white",
  },
  factContainer: {
    flexDirection: "column",
  },
  icon: {
    marginRight: 10,
  },
});
