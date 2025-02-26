import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const logo = require('./assets/logo.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 300, height: 300}} />
      <Text>Tenemos la app Aqui</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5271FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
