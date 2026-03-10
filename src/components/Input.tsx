import { TextInput, StyleSheet } from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secure?: boolean;
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  secure
}: Props) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secure}
      placeholderTextColor="#888"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12
  }
});