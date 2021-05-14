import * as React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Upcoming() {
  const renderEvents = () => {
    return [1, 2, 3, 4, 5, 6, 7].map((event) => (
      <View style={styles.event}>
        <Text style={styles.title}>enFIBat!</Text>
        <Text style={styles.title}>enFIBat!</Text>
        <Text style={styles.title}>enFIBat!</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>{renderEvents()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  event: {
    backgroundColor: "black",
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  scrollView: {
    width: "100%",
  },
});
