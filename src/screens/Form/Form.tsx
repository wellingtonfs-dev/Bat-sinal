import React from "react";
import { ScrollView, Text, TextInput, View, Image } from "react-native";
import logo from "../../../assets/bat-logo.png";
import { styles } from "./FormStyle";
import { BatTextInput } from "../../components/TextInput/BatTextInput";
import { BatLogo } from "../../components/BatLogo/BatLogo";

export function Form() {
  const [name, onChangeName] = React.useState("");
  const [text, onChangeText] = React.useState("");
  const [Adress, onChangeAdress] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View>
        <Text style={styles.text}>nome</Text>
        <TextInput
          onChangeText={onChangeName}
          value={name}
          style={styles.input}
          placeholder="Digite seu nome completo"
        />
        <Text style={styles.text}>idade</Text>
        <TextInput
          onChangeText={onChangeNumber}
          value={number}
          style={styles.input}          
          placeholder="Digite sua idade"
          keyboardType="numeric"
        />
        <Text style={styles.text}>Endereço</Text>
        <TextInput
          onChangeText={onChangeAdress}
          value={Adress}
          style={styles.inputLong}
          placeholder="Digite sua localização"
        />
        <Text style={styles.text}>descrição</Text>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          style={styles.inputLong}
          placeholder="Digite o motivo da ocorrência"
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
        />
      </View>
    </ScrollView>
  );
}
