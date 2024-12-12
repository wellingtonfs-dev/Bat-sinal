import { View, Text, TextInput} from 'react-native'
import { styles } from './CustomStyle';

type CustomInputProps = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    isMultiline?: boolean;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  };


export function CustomInput({ 
    label, 
    value, 
    onChangeText, 
    placeholder, 
    isMultiline = false, 
    keyboardType = 'default' 
  }: CustomInputProps) {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.text}>{label}</Text>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={isMultiline ? styles.inputLong : styles.input}
          placeholder={placeholder}
          editable
          multiline={isMultiline}
          numberOfLines={isMultiline ? 4 : 1}
          maxLength={isMultiline ? 40 : undefined}
          keyboardType={keyboardType}
        />
      </View>
    );
  }