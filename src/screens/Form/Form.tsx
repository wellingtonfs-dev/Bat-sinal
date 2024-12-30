import React from "react";
import { ScrollView, Image, Alert, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import logo from "../../../assets/bat-logo.png";
import { styles } from "./FormStyle";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { BatButton } from "../../components/Button/BatButton";
import { useNavigation } from "@react-navigation/native";

export function Form() {
  const navigation = useNavigation<any>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    Alert.alert("Sucesso", "Formulário enviado com sucesso!");
    console.log(data); 
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <Controller
        control={control}
        name="name"
        rules={{ required: "O nome é obrigatório" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomInput
              label="Nome"
              value={value}
              onChangeText={onChange}
              placeholder="Digite seu nome completo"
              onBlur={onBlur}
            />
            {errors.name && (
              <Text style={styles.errorText}>
                {String(errors.name.message || "Erro")}
              </Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="age"
        rules={{
          required: "A idade é obrigatória",
          pattern: { value: /^[0-9]+$/, message: "A idade deve ser numérica" },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomInput
              label="Idade"
              value={value}
              onChangeText={onChange}
              placeholder="Digite sua idade"
              keyboardType="numeric"
              onBlur={onBlur}
            />
            {errors.age && (
              <Text style={styles.errorText}>
                {String(errors.age.message || "Erro")}
              </Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="address"
        rules={{ required: "O endereço é obrigatório" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomInput
              label="Endereço"
              value={value}
              onChangeText={onChange}
              placeholder="Digite sua localização"
              isMultiline
              onBlur={onBlur}
            />
            {errors.address && (
              <Text style={styles.errorText}>
                {String(errors.address.message || "Erro")}
              </Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="description"
        rules={{ required: "A descrição é obrigatória" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomInput
              label="Descrição"
              value={value}
              onChangeText={onChange}
              placeholder="Digite o motivo da ocorrência"
              isMultiline
              onBlur={onBlur}
            />
            {errors.description && (
              <Text style={styles.errorText}>
                {String(errors.description.message || "Erro")}
              </Text>
            )}
          </>
        )}
      />

      <BatButton nav={errors.length ? "Home" : "Form"} text="Enviar" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}
