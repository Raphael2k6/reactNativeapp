import React from "react";
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { MyDrawer } from "./routes/drawer";

console.reportErrorsAsExceptions = false;
export default function App() {
  
  let [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
          <MyDrawer />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }
})