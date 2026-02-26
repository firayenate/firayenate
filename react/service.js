import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function servicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to services Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   
    alignItems: 'center',     
    backgroundColor: '#1518168a',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color:"#0e0e0f",
    
  },
});