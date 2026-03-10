import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ErrorScreen({ route, navigation }: any) {

  const { message } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Erro</Text>

      <Text style={styles.message}>{message}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10
  },

  message: {
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8
  },

  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});