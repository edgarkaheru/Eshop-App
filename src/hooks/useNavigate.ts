import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const useNavigate = () => {
  const navigation = useNavigation();

  const handleNavigate = (screenName: string) => {
    //@ts-ignore
    navigation.navigate(screenName);
  };
  return { handleNavigate };
};

export default useNavigate;
