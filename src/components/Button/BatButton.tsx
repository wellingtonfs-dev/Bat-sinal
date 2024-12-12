import React from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./ButtonStyle";
import { useNavigation } from "@react-navigation/native";

export function BatButton() {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => navigation.navigate("Form")}
      style={styles.button}
    >
      <Text style={styles.text}>Activate bat signal</Text>
    </Pressable>
  );
}

