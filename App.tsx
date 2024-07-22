import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/home";
import Profile from "./src/profile";
import Cart from "./src/cart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Getstarted from "./src/getstarted/Getstarted";
import Login from "./src/login";
import Signup from "./src/signup/Signup";
import TabNavigation from "./src/navigation/TabNavigation";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="getStarted" component={Getstarted} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen
          name="tabs"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
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
