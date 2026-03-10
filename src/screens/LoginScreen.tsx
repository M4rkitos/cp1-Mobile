import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Input from "../components/Input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../service/firebaseConfig";

export default function LoginScreen({ navigation }: any) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Success", { email: user.user.email });
    } catch (error: any) {
      navigation.navigate("Error", { message: error.message });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>Login</Text>

        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secure
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Criar conta</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e9eef2",
    alignItems: "center",
    justifyContent: "center"
  },

  card: {
    width: "85%",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },

  link: {
    marginTop: 15,
    textAlign: "center",
    color: "#007AFF"
  }
});