import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';

import Bienvenida from './screens/Bienvenida.jsx'
import Home from './screens/Home.jsx'
import Login from './screens/Login.jsx'
import Signin from './screens/Signin.jsx'


const Stack = createStackNavigator();

export default function App() {
  return (

      <NavigationContainer >
      <Stack.Navigator initialRouteName="Bienvenida">
      <Stack.Screen name="Bienvenida" component={Bienvenida} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
 