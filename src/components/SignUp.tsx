import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const iPhone14Width = 428;
const iPhone14Height = 926;
const widthRatio = width / iPhone14Width;
const heightRatio = height / iPhone14Height;

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    Alert.alert(`Signing up with username: ${username}, email: ${email} and password: ${password}`);
  };

  const handleFacebookSignup = () => {
    // Perform facebook login logic here
    Alert.alert(`Logging in with facebook`);
  };
  
  const handleAppleLogin = () => {
    // Perform apple login logic here
    Alert.alert(`Logging in with apple`);
  };
  
  const handleGoogleLogin = () => {
    // Perform google login logic here
    Alert.alert(`Logging in with google`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Munch ArtPoint</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={'Email'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookSignup}>
        <Text style={styles.facebookButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton} onPress={handleAppleLogin}>
        <Text style={styles.appleButtonText}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Text style={styles.googleButtonText}>Login with Google</Text>
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
  headerText: {
    color: '#EA4C2B',
    fontSize: widthRatio * 40,
    height: heightRatio * 200,
  },
  input: {
    width: widthRatio * 355,
    height: heightRatio * 40,
    top: heightRatio * -100,
    padding: widthRatio * 10,
    borderWidth: widthRatio * 1,
    marginBottom: heightRatio * 27,
    borderRadius: widthRatio * 10,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  button: {
    width: widthRatio * 200,
    height: heightRatio * 40,
    top: heightRatio * -110,
    backgroundColor: '#EA4C2B',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: widthRatio * 1,
    marginBottom: heightRatio * 10,
    borderRadius: widthRatio * 50,
  },
  buttonText: {
    color: 'white',
  },
  facebookButton: {
    width: widthRatio * 350,
    height: heightRatio * 45,
    top: heightRatio * -70,
    backgroundColor: '#4B4848',
    borderRadius: widthRatio * 10,
  }, 
  facebookButtonText: {
    color: 'white',
    padding: widthRatio * 10,  
  }, 
  appleButton: {
    width: widthRatio * 350, 
    height: heightRatio * 45, 
    top: heightRatio * -60, 
    backgroundColor: '#4B4848', 
    borderRadius: widthRatio * 10, 
  }, 
  appleButtonText: {
    color: 'white', 
    padding: widthRatio * 10, 
  }, 
  googleButton: {
    width: widthRatio * 350, 
    height: heightRatio * 45, 
    top: heightRatio * -50, 
    backgroundColor: '#4B4848', 
    borderRadius: widthRatio * 10,
  }, 
  googleButtonText: {
    color: 'white', 
    padding: widthRatio * 10, 
  }, 
});

export default Signup;

