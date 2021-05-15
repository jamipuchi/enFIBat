import React, { useState } from "react";
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

const eventTypes = [
  { name: "academic", selected: true, color: "#ffc72c" },
  { name: "event", selected: true, color: "#e56a54" },
  { name: "social", selected: true, color: "#6da04b" },
  { name: "talks", selected: true, color: "#2f9fd0" },
];

export default function Upcoming() {
  const [selectedEventTypes, setSelectedEventTypes] = useState(eventTypes);

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
    const filteredData = mockJsonData.filter((date) => {
      for (let index = 0; index < date.data.length; index++) {
        const element = date.data[index];
        if (
          selectedEventTypes.find((set) => set.name === element.type).selected
        ) {
          return true;
        }
      }
      return false;
    });
    return filteredData.map((event, index) => (
      <View key={event.id} style={styles.eventView}>
        <Text style={styles.date}>{event.date}</Text>
        {event.data.map((ev) =>
          selectedEventTypes.find((set) => set.name === ev.type).selected ? (
            <View key={JSON.stringify(ev.description)} style={styles.event}>
              <View style={styles.time}>
                <Text style={styles.hour}>{ev.time}</Text>
              </View>
              <TouchableOpacity
                style={{
                  ...styles.title,
                  backgroundColor: getColorForEvent(ev),
                }}
                onPress={() => Linking.openURL(ev.link)}
              >
                <Text style={styles.titleText}>
                  {ev.description.summary
                    ? `${ev.description.summary} (${ev.description.subject})`
                    : ev.description}
                </Text>
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </View>
    ));
  };

  const FilterPills = () => (
    <View style={styles.filterPillGroup}>
      {selectedEventTypes.map((eventType, index) => {
        return (
          <TouchableOpacity
            key={eventType.name}
            style={{
              ...styles.filterPill,
              backgroundColor: eventType.selected ? eventType.color : "#d3d3d3",
            }}
            onPress={() => {
              selectedEventTypes;
              const elements = selectedEventTypes;
              elements[index] = {
                name: eventType.name,
                selected: !eventType.selected,
                color: eventType.color,
              };
              setSelectedEventTypes([...elements]);
            }}
          >
            <Text>{eventType.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FilterPills />
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
    marginBottom: 4,
    borderRadius: 5,
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  titleText: { color: "black", fontSize: 16 },
  time: { flexDirection: "column", width: "12%" },
  eventView: {
    padding: 10,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  date: {
    padding: 5,
  },
  filterPill: {
    marginRight: 4,
    padding: 8,
    borderRadius: 16,
  },
  filterPillGroup: {
    margin: 15,
    flexDirection: "row",
  },
});
