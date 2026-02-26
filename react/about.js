import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function aboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to about Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   
    alignItems: 'center',      
    backgroundColor: '#222b258a',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color:"#white",
  
  },
});