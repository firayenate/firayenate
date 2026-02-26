import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function loginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to login Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   
    alignItems: 'center',       
    backgroundColor: '#171a188a',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color:"#181514",
    
  },
});