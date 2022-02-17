import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator> 
      <Stack.Screen 
        name="About GameZone" 
        component={About} 
        options={{
          headerStyle: { backgroundColor: '#eee', height: 60},
          headerTintColor: '#444',
            headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
