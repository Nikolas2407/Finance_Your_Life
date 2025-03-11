import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import Primary from '../components/Botones/Primary'
const logo = require('../assets/Logo.png');


const  Home = ({navigation}) =>{
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.container1}>
        <Text style={styles.title} >Bienvenido</Text>
        <Text style={styles.container_text}>Finance Your Life es la herramienta que necesitas para tomar el control de tus finanzas</Text>
        
        <Primary texto="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
        <Primary texto="Registrarse" onPress={() => navigation.navigate('Signin')} />
        
  
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
      display: 'inline-flex'
      
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
    title: {
      color: '#000000',
      fontSize: 32,
      fontWeight:600,
      paddingBottom: 20,
      
    },
    container_text: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight:400,
      paddingBottom: 20,
    },
  
  });
  export default Home;
  