import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/home";
import Profile from "./src/profile";
import Cart from "./src/cart";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
