import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

import Primary from '../components/Inputs/Primary'
import Terciary from '../components/Botones/Terciary'
import H1 from '../components/Titles/H1';
import Cuerpo from '../components/Titles/Cuerpo';

 const SignIn = () => {
   //Estados para los campos
   const [Nombre, setNombre] = useState('');
   const [TipoDocumento, setTipoDocumento] = useState('');
   const [NumeroDocumento, setNumeroDocumento] = useState('');
   const [FechaNacimiento, setFechaNacimiento] = useState('');
   const [Correo, setCorreo] = useState('');
   const [Contraseña, setContraseña] = useState('');
   const navigation = useNavigation();

   const handleRegister = async () => {
     // Validación de campos vacios
     if (!Nombre || !TipoDocumento || !NumeroDocumento || !FechaNacimiento  || !Correo  || !Contraseña) {
       Alert.alert('Error', 'Todos los campos son obligatorios');
       return;
     }

      try {
         //Envio de datos al backend
        const response = await axios.post('http://0.0.0.0:5000/registro',{
         Nombre: Nombre,
         Tipo_Documento: TipoDocumento,
         Numero_Documento: NumeroDocumento,
         Fecha_Nacimiento: FechaNacimiento,
         Correo: Correo,
         Contraseña: Contraseña
       });

        if(response.status === 201){
         Alert.alert('Exito','Registro exitoso');
         navigation.navigate('Login');
         }
         
        }catch (error) {
       if(error.response && error.response.status === 409){
       Alert.alert('Alerta', "Usuario existente");
       navigation.navigate('Login');
     } else {
       alert('Error',error.message);
     }
     }
  };

  return (
    <View style={styles.container}>
                <View style={styles.container_1}>
                <H1 texto="Registrarse" color='#FFFFFF'/>
                <Cuerpo texto="Crea tu cuenta para empezar una vida financiera" color="#FFFFFF" />
                </View>
                <View style={styles.container_2}>
                    <Primary  placeholder="Nombre"
                              value={Nombre}
                              onChangeText={setNombre}
                    />

                    <Primary  placeholder="Tipo de Documento"
                              value={TipoDocumento}
                              onChangeText={setTipoDocumento}
                    />

                    <Primary   placeholder="Numero de Documento"
                                value={NumeroDocumento}
                                onChangeText={setNumeroDocumento}
                    />

                    <Primary   placeholder="Fecha de Nacimiento"
                                value={FechaNacimiento}
                                onChangeText={setFechaNacimiento}
                    />

                    <Primary     placeholder="Correo"
                                  value={Correo}
                                  keyboardType="email-address"
                                  onChangeText={setCorreo}
                    />   

                    <Primary     placeholder="Contraseña"
                                 value={Contraseña}
                                 onChangeText={setContraseña}
                                 secureTextEntry 
                    />
    
    
                    <Button title="Olvidaste tu contraseña?" onPress={() => alert('Hola')} color='#000000'/>
                    
                    <Terciary texto="Iniciar Sesión" color="#FFFFFF" />
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
                    <Cuerpo texto="No estas registrado?"></Cuerpo>
                    <Button title="Registrate Aquí" onPress={handleRegister}/>
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

export default SignIn;