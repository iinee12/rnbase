import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as pages from "./src";
import { ThemeProvider } from "react-native-elements";
import { mainTheme } from "./src/resource/style/MainTheme";

const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={pages.Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={pages.Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
