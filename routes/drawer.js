import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutStack } from './aboutStack';
import { MyStack } from './homeStack';
import Header from '../shared/header';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MyStack} options={{
                headerTitle: () => <Header title="GameZone"/>,
                // headerShown: false,

            }}/>
            <Drawer.Screen name="About" component={AboutStack} options={{ 
                headerTitle: () => <Header title="About GameZone"/>
                }} 
            />
        </Drawer.Navigator>
    );
}