import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './components/Feed';
import FeedItem from './components/FeedItem';
import Leaderboard from './components/Leaderboard';
import Login from './components/LogIn';
import Signup from './components/SignUp';


export default function App() {
  return (
    <View style={styles.container}>
      <Leaderboard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
