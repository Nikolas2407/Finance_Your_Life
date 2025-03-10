import { TextInput, View, StyleSheet } from 'react-native';

const InputPrimary = ({placeholder, value, onChangeText, keyboardType = 'default', ecureTextEntry = false,style, iconLeft, iconRight}) => {
    return(
      <TextInput style={styles.input} 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor="#FFFFFF"
      />

    )

}
const styles = StyleSheet.create(
    {
    input:{
        width: '100%', 
            height: '60px',
            backgroundColor: '#5271FF', 
            borderRadius: 20,
            position: 'relative',
            padding: 20,
            textAlign:'center',
            display: 'flex',
            flexDirection: 'column',
            color: '#FFFFFF',
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)',
            fontSize:16,
            ååfontFamily: 'PoppinsMedium', 
            fontWeight: '500'
      
    }
}
)

export default InputPrimary;