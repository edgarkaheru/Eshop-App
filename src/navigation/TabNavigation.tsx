import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../home";
import Cart from "../cart";
import Profile from "../profile";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" color={focused ? "blue" : ""} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({}) => <Ionicons name="caret-back" />,
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person" color={focused ? "blue" : ""} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
