import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator> 
      <Stack.Screen 
        name="GameZone" 
        component={Home} 
        options={{
          headerStyle: { backgroundColor: '#eee', height: 60},
          headerTintColor: '#444',
          headerShown: false,
          headerTitle: () => <Header />
        }}
      />
      <Stack.Screen 
        name="ReviewDetails" 
        component={ReviewDetails} 
        options={{
          headerStyle: { backgroundColor: '#eee'},
          headerTintColor: '#444',
        }}
      />
      {/* <Stack.Screen 
        name="About" 
        component={About} 
      /> */}
    </Stack.Navigator>
  );
}
