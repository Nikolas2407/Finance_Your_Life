import {Text,View,StyleSheet, Button,TextInput,Alert} from 'react-native';
import { useState } from 'react';
// Input
import Primary from '../components/Inputs/Primary';
// Butons
import Terciary from '../components/Botones/Terciary';
// Textos
import H1 from '../components/Titles/H1';
import Cuerpo from '../components/Titles/Cuerpo';
// Firebase
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

// const hanldleLogin = ( ) => {

//     const Regex = /^[a-zA-Z0-9._-)+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!Regex.test(email)){
//         Alert.alert('Invalid Email', 'Plase enter a valid email address')
//         return;
//     }


//     signInWithEmailAndPassword(auth, email, password)
//     const user = auth.currentUser;
//     if(user){
//         Alert.alert("Inicio de sesion exitoso", "You have succesfully logged in")
//     } {
//         Alert.alert("Loidel Failed", "Please check your credentials and try again")
//     }
// };

    return(
       

        <View style={styles.container}>
            <View style={styles.container_1} >
            <H1 texto="Iniciar Sesión" color='#FFFFFF'></H1>
            <Cuerpo texto="Da el primer paso hacia una vida financiera sin preocupaciones." color="#FFFFFF"  ></Cuerpo>
            </View>
            <View style={styles.container_2}>
                <Primary placeholder="Correo:"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"

                ></Primary>
                <Primary placeholder='Contraseña:'
                type={password}
                onChangeText={setPassword}
                SecureTextEntry={true}></Primary>

                <Button title="Olvidaste tu contraseña?" onPress={() => alert('Hola')} color='#000000'></Button>
                
                <Terciary texto="Iniciar Sesión" color="#FFFFFF" ></Terciary>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
                <Cuerpo texto="No estas registrado?"></Cuerpo>
                <Button title="Registrate Aquí" onPress={() => alert('Hola')}></Button>
                </View>
                </View>
            </View>

            


    )
}
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
export default Login;