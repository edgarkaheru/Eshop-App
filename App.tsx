import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
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
import { StatusBar } from "expo-status-bar";

export default function App() {
  const Tab = createBottomTabNavigator();
  const theme = useColorScheme();

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer theme={theme == "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="getStarted" component={Getstarted} />
        <Stack.Screen
          name="login"
          options={{
            // headerShown: false,
            header: () => (
              <SafeAreaView>
                <StatusBar backgroundColor="red" />
                <Text>Header</Text>
              </SafeAreaView>
            ),
          }}
          component={Login}
        />
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
