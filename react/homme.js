import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
export default function HomeScreen() { 
return ( 
<View style={styles.container}> 
<Text style={styles.text}>Welcome to Home Page!</Text> 
</View> 
); 
}
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center',   // vertical center 
    alignItems: 'center',       // horizontal center 
    backgroundColor: '#f2f2f2', 
  }, 
  text: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color:"#e60c0c", 
  }, 
}); 