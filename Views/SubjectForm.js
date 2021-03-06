import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import TypeformEmbed from "react-native-typeform-embed";

export default function SubjectForm() {
  return (
    <TypeformEmbed
      url="https://dvepfpxqmnm.typeform.com/to/TTpaJDmA"
      onSubmit={() => alert("Submitted!")}
    />
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
