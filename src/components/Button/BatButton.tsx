import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./ButtonStyle";
import { useNavigation } from "@react-navigation/native";

type ButtonProps ={
  nav?: string,
  text: string,
  onPress?: () => void
}

export function BatButton({nav, text, onPress}: ButtonProps)  {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => {
        if (onPress) onPress()
        navigation.navigate(nav)
      }}
      style={styles.button}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

