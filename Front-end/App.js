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

//Registro
import React from 'react';
import Registro from './Registro';

const App = () => {
  return <Registro/>;
};

//export default App; 





// const Stack = createStackNavigator();
export default function App() {



  return (
    <View style={styles.container}>
      
      <Image source={logo} style={styles.logo} />
      <View style={styles.container1}>
      <H1 texto="Bienvenido"></H1>
      <Cuerpo style={styles.container_text} texto="Finance Your Life es la herramienta que necesitas para tomar el control de tus finanzas"></Cuerpo>
      <Primary texto="Iniciar Sesión" onPress={() => alert('Hola')} />
      <Primary texto="Registrarse" onPress={() => alert('Hola')} />
      

      </View>
      <StatusBar style="dark" />
  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%', 
    backgroundColor: '#5271FF', 
    flexDirection: 'column', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    display: 'inline-flex',
    fontFamily: 'PoppinsMedium',
    
  },
  logo:{
    width: 300, 
    height: 300, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    display: 'inline-flex',
  },
  container1: {
    width: '100%', 
    height: '45%', 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    display: 'inline-flex', 
    backgroundColor: '#FFFFFF', 
    padding: 20,
    gap: 15,
    paddingBottom: 30,
  },

});
