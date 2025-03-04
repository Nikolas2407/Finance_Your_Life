import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
const logo = require('./assets/Logo.png');


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 300, height: 300 }} />
      <View style={styles.container1}>
      <Text style={styles.title} >Bienvenido</Text>
      <Text style={styles.container_text}>Finance Your Life es la herramienta que necesitas para tomar el control de tus finanzas</Text>
      <TouchableOpacity style={styles.primario} onPress={() => alert('¡Botón personalizado!')}>
      <Text style={styles.buttonPrimario}>Presionar</Text>
    </TouchableOpacity>
      
      <Button title="Registrarse" on onPress={() => alert('Hola')} />
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5271FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBar,
    
  },
  container1: {
    width: '100%',
    height: '40%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
  primario: {
    backgroundColor: '#5271FF',
    color:'#FFFFFF',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    height: 60,
    textAlign: 'center',
    marginBottom: 10,

  },
  buttonPrimario: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
