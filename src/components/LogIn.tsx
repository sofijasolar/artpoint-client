import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const iPhone14Width = 428;
const iPhone14Height = 926;
const widthRatio = width / iPhone14Width;
const heightRatio = height / iPhone14Height;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    Alert.alert(`Logging in with username: ${username} and password: ${password}`);
  }
  const handleFacebookLogin = () => {
    // Perform facebook login logic here
    Alert.alert(`Logging in with facebook`);
  }
  const handleAppleLogin = () => {
    // Perform apple login logic here
    Alert.alert(`Logging in with apple`);
  }
  const handleGoogleLogin = () => {
    // Perform google login logic here
    Alert.alert(`Logging in with google`);
  }
  const handleSignUp = () => {
    // Perform google login logic here
    Alert.alert(`Sign Up`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Munch ArtPoint</Text>
      <Text style={styles.labelText}>Username / Email</Text>
      <Text style={styles.label2Text}>Password</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookLogin}>
        <Text style={styles.facebookButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton} onPress={handleAppleLogin}>
        <Text style={styles.appleButtonText}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: widthRatio * 350,
    height: widthRatio * 40,
    padding: widthRatio * 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginBottom: widthRatio * 50,
    borderRadius: widthRatio * 10,
  },
  labelText: {
    color: 'white',
    fontSize: widthRatio * 18,
    right: widthRatio * 125,
    top: widthRatio * 15,
  },
  label2Text: {
    color: 'white',
    fontSize: widthRatio * 18,
    right: widthRatio * 150,
    top: widthRatio * 90,
  },
  headerText: {
    color: '#EA4C2B',
    fontSize: widthRatio * 40,
    height: widthRatio * 100,
  },
  button: {
    position: 'absolute',
    width: widthRatio * 151,
    height: widthRatio * 31,
    left: widthRatio * 95,
    top: widthRatio * 510,
    backgroundColor: '#EA4C2B',
    justifyContent: 'center',
    borderRadius: widthRatio * 20,
  },
  buttonText: {
    color: 'white',
    left: widthRatio * 55,
  },
  facebookButton: {
    width: widthRatio * 350,
    height: widthRatio * 45,
    top: widthRatio * 80,
    backgroundColor: '#4B4848',
    borderRadius: widthRatio * 10,
  },
  facebookButtonText: {
    color: 'white',
    padding: widthRatio * 10,
  },
  appleButton: {
    width: widthRatio * 350,
    height: widthRatio * 45,
    top: widthRatio * 90,
    backgroundColor: '#4B4848',
    borderRadius: widthRatio * 10,
  },
  appleButtonText: {
    color: 'white',
    padding: widthRatio * 10,
  },
  googleButton: {
    width: widthRatio * 350,
    height: widthRatio * 45,
    top: widthRatio * 100,
    backgroundColor: '#4B4848',
    borderRadius: widthRatio * 10,
  },
  googleButtonText: {
    color: 'white',
    padding: widthRatio * 10,
  },
  signUpButton: {
    top: widthRatio * 120,
    right: widthRatio * 150,
    color: 'white',
  },
  signUpButtonText: {
    color: 'white',
    textDecorationLine: 'underline',
  }
});

export default Login;
