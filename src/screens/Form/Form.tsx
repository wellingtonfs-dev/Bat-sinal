import React, { useState } from "react";
import { ScrollView, Image } from "react-native";
import logo from "../../../assets/bat-logo.png";
import { styles } from "./FormStyle";
import { CustomInput } from "../../components/CustomInput/CustomInput";

export function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <CustomInput
        label="Nome"
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome completo"
      />
      <CustomInput
        label="Idade"
        value={age}
        onChangeText={setAge}
        placeholder="Digite sua idade"
        keyboardType="numeric"
      />
      <CustomInput
        label="Endereço"
        value={address}
        onChangeText={setAddress}
        placeholder="Digite sua localização"
        isMultiline
      />
      <CustomInput
        label="Descrição"
        value={description}
        onChangeText={setDescription}
        placeholder="Digite o motivo da ocorrência"
        isMultiline
      />
    </ScrollView>
  );
}
