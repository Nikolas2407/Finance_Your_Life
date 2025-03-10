import { Text, StyleSheet } from 'react-native';

const Cuerpo = ({texto,color})=> {
    return(
        <Text style={[styles.cuerpo,{color}]}>{texto}</Text>
    )
}
const styles = StyleSheet.create({
    cuerpo: {
        
        fontSize: 16, 
        fontFamily: 'PoppinsRegular', 
        fontWeight: '400', 
        wordWrap: 'break-word',
        textAlign:'center',
    }
})
export default Cuerpo;