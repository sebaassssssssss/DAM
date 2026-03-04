import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState('');

  const handleLogin = () => {
    //Limpiar el mensaje previo
    setMessage('');

    //Ver si email o password están en blanco
    if (email === '' || password === '') {
      setMessage('Campos vacíos');
      return;
    }
    
    //Validar que el email incluya el @
    if (!email.includes('@')) {
      setMessage('El email no incluye "@"');
      return;
    }

    //Verificar que la contraseña tenga mínimo 6 caracteres
    if (password.length < 6) {
      setMessage('Contraseña menor a 6 caracteres');
      return;
    }

    //Poner mensaje de "Cargando..."
    setMessage('Cargando...');

    setTimeout(() => {
      if (email === "admin@test.com" && password === "123456") {
        setMessage('Bienvenido!')
      } else {
        setMessage('Credenciales incorrectas')
      }
    }, 2000);
  }
  
  
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Iniciar sesión</Text>
      </View>
      
      <TextInput style={styles.input} placeholder='Email' onChangeText={text => setEmail(text)}></TextInput>

      <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry={true} onChangeText={text => setPassword(text)}></TextInput>

      <TouchableOpacity onPress={handleLogin} style={styles.botonLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text>{message}</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#5bb250',
    borderBottomWidth: 4,
    borderBottomColor: '#67d66c', 
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute', //para pergarlo arriba
    top: 0,
    height: '30%',
    elevation: 15,
  },
  textTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    textShadowColor: '#00000080',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
    fontFamily: 'sans-serif-light',
  },
  input: {
    width: '85%',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#b0bec5',
    padding: 15,
    marginVertical: 12,
    borderRadius: 30,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  botonLogin: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 55,
    backgroundColor: '#5bb250',
    borderWidth: 2,
    borderColor: '#c8e6c9',
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    elevation: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: '#00000080',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  message: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: '600',
    color: '#37474f',
  }
});