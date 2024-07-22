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

const Login = () => {
  const { handleNavigate } = useNavigate();
  const handlesignup = () => {
    handleNavigate("signup");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => handleNavigate("tabs")} />
      <View style={styles.linksContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button title="signup" onPress={handlesignup} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    justifyContent: "space-between",
  },
  link: {
    color: "blue",
  },

  button: {
    backgroundColor: "lightlue",
  },
});

export default Login;
