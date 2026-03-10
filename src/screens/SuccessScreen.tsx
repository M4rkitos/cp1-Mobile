import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SuccessScreen({ route, navigation }: any) {

  const { email } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sucesso</Text>

      <Text style={styles.email}>{email}</Text>

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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10
  },

  email: {
    fontSize: 18,
    marginBottom: 20
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