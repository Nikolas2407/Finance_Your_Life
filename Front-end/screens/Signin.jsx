import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// Input
import Primary from '../components/Inputs/Primary';
// Butons
import Terciary from '../components/Botones/Terciary';
// Textos
import H1 from '../components/Titles/H1';
import Cuerpo from '../components/Titles/Cuerpo';





const Registro = () => {
  const [NOMBRECOMPLETO, setNombre] = useState('');
  const [TDOCUMENTO, setDocumento] = useState('');
  const [NUMERO, setNumero] = useState('');
  const [FECHADENACIMIENTO, setFecha] = useState('');
  const [EMAIL, setEmail] = useState('');
  const [CONTRASEÑA, setPassword] = useState('');
  const handleRegister = async () => {
    // Validación simple
    if (!NOMBRE || !T.DOCUMENTO || !NUMERO  || !FECHADENACIMIENTO  || !EMAIL  || !CONTRASEÑA) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await fetch('https://tu-api.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ NOMBRECOMPLETO, TDOCUMENTO, NUMERO, FECHADENACIMIENTO, EMAIL, CONTRASEÑA }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Éxito', 'Usuario registrado correctamente');
        setNombre('');
        setDocumento('');
        setNumero('');
        setFecha('');
        setEmail('');
        setPassword('');
      } else {
        Alert.alert('Error', data.message || 'Algo salió mal');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar con el servidor');
    }
  };

  return (
    <View style={styles.container}>
                <View style={styles.container_1} >
                <H1 texto="Registrarse" color='#FFFFFF'></H1>
                <Cuerpo texto="Crea tu cuenta para empezar una vida financiera" color="#FFFFFF"  ></Cuerpo>
                </View>
                <View style={styles.container_2}>
                    <Primary  placeholder="Nombre"
                              value={NOMBRECOMPLETO}
                              onChangeText={setNombre}
                    ></Primary>

                    <Primary  placeholder="Documento"
                              value={TDOCUMENTO}
                              onChangeText={setDocumento}
                    ></Primary>

                    <Primary   placeholder="Numero"
                                value={NUMERO}
                                onChangeText={setNumero}
                    ></Primary>

                    <Primary   placeholder="Fecha"
                                value={FECHADENACIMIENTO}
                                onChangeText={setFecha}
                    ></Primary>

                    <Primary     placeholder="Email"
                                  value={EMAIL}
                                  keyboardType="email-address"
                                  onChangeText={setEmail}
                    ></Primary>   

                    <Primary     placeholder="Contraseña"
                                 value={password}
                                 onChangeText={setPassword}
                                 secureTextEntry 
                    ></Primary>
    
    
                    <Button title="Olvidaste tu contraseña?" onPress={() => alert('Hola')} color='#000000'></Button>
                    
                    <Terciary texto="Iniciar Sesión" color="#FFFFFF" ></Terciary>
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
                    <Cuerpo texto="No estas registrado?"></Cuerpo>
                    <Button title="Registrate Aquí" onPress={() => alert('Hola')}></Button>
                    </View>
                    </View>
                </View>

  );
};
const styles = StyleSheet.create(
  {
      container:{
          width: '100%', 
          height: '100%', 
          backgroundColor: '#5271FF', 
          flexDirection: 'column', 

      },
      container_1:{
          width: '100%', 
          height: '35%', 
          paddingLeft: 20, 
          paddingRight: 20, 
          paddingTop: 30, 
          paddingBottom: 30, 
          background: '#5271FF', 
          flexDirection: 'column', 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          gap: 20, 
          display: 'inline-flex',
      },
      container_2:{
          width: '100%', 
          height: '65%', 
          paddingLeft: 30, 
          paddingRight: 30, 
          paddingTop: 60, 
          paddingBottom: 60, 
          backgroundColor: '#FFFFFF', 
          boxShadow: '5px -10px 10px rgba(0, 0, 0, 0.25)', 
          borderTopLeftRadius: 20, 
          borderTopRightRadius: 20, 
          flexDirection: 'column', 
          justifyContent: 'flex-start',
          alignItems: 'center', 
          gap: 30, 
          display: 'inline-flex'
      },

  }
)

export default Registro;