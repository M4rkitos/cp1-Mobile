import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SuccessScreen from "../screens/SuccessScreen";
import ErrorScreen from "../screens/ErrorScreen";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Success"
          component={SuccessScreen}
        />

        <Stack.Screen
          name="Error"
          component={ErrorScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}