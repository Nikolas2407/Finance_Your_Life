import { Text, StyleSheet } from 'react-native';

const H1 = ({texto,color})=> {
    return(
        <Text style={[styles.titulo_uno, {color}]}>{texto}</Text>
    )
}
const styles = StyleSheet.create({
    titulo_uno: {
        fontSize: 32, 
        fontFamily: 'PoppinsSemiBold', 
        fontWeight: '600', 
        wordWrap: 'break-word'
    }
})
export default H1;