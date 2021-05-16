import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Achievements from "./Views/Achievements.js";
import AchievementDetails from "./Views/AchievementDetails.js";
import Profile from "./Views/Profile.js";
import SubjectForm from "./Views/SubjectForm.js";
import Upcoming from "./Views/Upcoming.js";
import Facts from "./Views/Facts.js";
import FactsDetails from "./Views/FactsDetails.js";
import { Icon } from "react-native-elements";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const AchivementScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Achievements" component={Achievements} />
      <Stack.Screen name="AchievementDetails" component={AchievementDetails} />
    </Stack.Navigator>
  );
};

const FactScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Facts" component={Facts} />
      <Stack.Screen name="FactsDetails" component={FactsDetails} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: "#ededed" }}>
        <Tab.Screen
          name="Upcoming"
          component={Upcoming}
          options={{
            tabBarLabel: "Upcoming",
            tabBarIcon: ({ color, size }) => (
              <Icon name="calendar" type="evilicon" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Achievements"
          component={AchivementScreens}
          options={{
            tabBarLabel: "Achievements",
            tabBarIcon: ({ color, size }) => (
              <Icon name="like" type="evilicon" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Facts"
          component={FactScreens}
          options={{
            tabBarLabel: "Facts",
            tabBarIcon: ({ color, size }) => (
              <Icon name="location" type="evilicon" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SubjectForm"
          component={SubjectForm}
          options={{
            tabBarLabel: "Subject path",
            tabBarIcon: ({ color, size }) => (
              <Icon name="pencil" type="evilicon" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" type="evilicon" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
