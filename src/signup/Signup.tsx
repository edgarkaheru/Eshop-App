import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import useNavigate from "../hooks/useNavigate";

const Signup = () => {
  const { handleNavigate } = useNavigate();
  const handleLogin = () => {
    handleNavigate("login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign Up" />
      <View style={styles.linksContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Already have an account?</Text>
          <Button title="Login" onPress={handleLogin} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  linksContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
});
