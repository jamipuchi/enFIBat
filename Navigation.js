import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Achievements from "./Views/Achievements.js";
import Profile from "./Views/Profile.js";
import SubjectForm from "./Views/SubjectForm.js";
import Upcoming from "./Views/Upcoming.js";
import Facts from "./Views/Facts.js";
import { Icon } from "react-native-elements";

const Tab = createMaterialBottomTabNavigator();

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
          component={Achievements}
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
