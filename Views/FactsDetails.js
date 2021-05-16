import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";

export default function FactsDetails({ route }) {
  const navigation = useNavigation();
  const { text, title, link, image } = route.params;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.description}>{text}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: image,
        }}
      />
      <Button title="More info" onPress={() => Linking.openURL(link)}></Button>
      <Text style={styles.tapToDismiss}>Tap to dismiss</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    width: "100%",
    padding: 20,
    textAlign: "center",
    fontSize: 50,
  },
  description: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tinyLogo: {
    width: "100%",
    height: 300,
    marginTop: 20,
    marginBottom: 20,
  },
  tapToDismiss: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    textAlign: "center",
    fontSize: 12,
    padding: 10,
  },
});
