import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator } from '@react-navigation/stack';
import Primary from './components/Botones/Primary'
import Secundary from './components/Botones/Secundary';
import H1 from './components/Titles/H1'
import Cuerpo from './components/Titles/Cuerpo'
import Login from './screens/Login'
const logo = require('./assets/Logo.png');

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
