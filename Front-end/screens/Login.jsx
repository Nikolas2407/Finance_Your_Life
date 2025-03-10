import {Text,View,StyleSheet, Button} from 'react-native';
import { useState } from 'react';
import Primary from '../components/Inputs/Primary';
import Secundary from '../components/Botones/Secundary';
import Terciary from '../components/Botones/Terciary';
import H1 from '../components/Titles/H1';
import Cuerpo from '../components/Titles/Cuerpo';

const Login = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return(
       

        <View style={styles.container}>
            <View style={styles.container_1} >
            <H1 texto="Iniciar Sesión" color='#FFFFFF'></H1>
            <Cuerpo texto="Da el primer paso hacia una vida financiera sin preocupaciones." color="#FFFFFF"  ></Cuerpo>
            </View>
            <View style={styles.container_2}>
                <Primary placeholder="CORREO"
                keyboardType="email-address"
                autoCapitalize="none"
                ></Primary>
                <Primary placeholder="CONTRASEÑA"
                secureTextEntry={!isPasswordVisible}
                autoCapitalize="none"
                autoCorrect={false}/>
                <Button title="Olvidaste tu contraseña?" onPress={() => alert('Hola')}></Button>
                
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
            background: '#5271FF', 
            flexDirection: 'column', 

        },
        container_1:{
            width: '100%', 
            height: '30%', 
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
            height: '70%', 
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