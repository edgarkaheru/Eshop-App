import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useNavigate from "../hooks/useNavigate";

const Getstarted = () => {
  const { handleNavigate } = useNavigate();

  const handlelogin = () => {
    handleNavigate("login");
  };
  return (
    <View>
      <Button title="GET STARTED " onPress={handlelogin} />
    </View>
  );
};

export default Getstarted;

const styles = StyleSheet.create({});
