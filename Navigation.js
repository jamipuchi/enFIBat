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
import { Icon } from "react-native-elements";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
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

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: "#e56a54" }}>
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
          component={StackNavigator}
          options={{
            tabBarLabel: "Achievements",
            tabBarIcon: ({ color, size }) => (
              <Icon name="like" type="evilicon" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Facts"
          component={Facts}
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
            tabBarLabel: "SubjectForm",
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
