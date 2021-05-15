import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import mockJsonData from "../mockdata/upcoming";

export default function Upcoming() {
  const getColorForEvent = (event) => {
    if (event.type === "academic") {
      return event.description.type === "delivery" ? "#ffc72c" : "#ebec00";
    }
    if (event.type === "event") {
      return "#e56a54";
    }
    if (event.type === "social") {
      return "#6da04b";
    }
    if (event.type === "talks") {
      return "#2f9fd0";
    }
  };

  const renderEvents = () => {
    return mockJsonData.map((event) => {
      const backgroundColor = getColorForEvent(event);
      console.log(backgroundColor);
      return (
        <View key={event.id} style={styles.event}>
          <View style={styles.time}>
            <Text style={styles.date}>{event.date[0]}</Text>
            <Text style={styles.hour}>{event.date[1]}</Text>
          </View>
          <TouchableOpacity
            style={{ ...styles.title, backgroundColor: backgroundColor }}
            onPress={() => Linking.openURL("https://google.com")}
          >
            <Text style={styles.titleText}>
              {event.description.summary
                ? `${event.description.summary} (${event.description.subject})`
                : event.description}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
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
    marginLeft: 10,
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
  event: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  titleText: { color: "black" },
  time: { flexDirection: "column", width: "20%" },
});
