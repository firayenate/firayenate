import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function contactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to contact Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
    backgroundColor: '#1416158a',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color:"#0f0f0f",
    
  },
});