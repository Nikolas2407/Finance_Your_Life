import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

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
      <Text style={styles.title}>Registro</Text>

      <TextInput
        placeholder="Nombre"
        value={NOMBRECOMPLETO}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        placeholder="Documento"
        value={TDOCUMENTO}
        onChangeText={setDocumento}
        style={styles.input}
      />
      <TextInput
        placeholder="Numero"
        value={NUMERO}
        onChangeText={setNumero}
        style={styles.input}
      />
      <TextInput
        placeholder="Fecha"
        value={FECHADENACIMIENTO}
        onChangeText={setFecha}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={EMAIL}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry 
      />

      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
  },
});

export default Registro;