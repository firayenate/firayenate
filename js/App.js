import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
     <Text style={styles.title}>Mobile App</Text>

         <TextInput style={styles.input}
          placeholder='Enter UserName'/>
         <TextInput style={styles.input} 
         placeholder='Enter Password'/>
         <button style={styles.button} title='login'>login</button>
           </View>
      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#473841',
    alignItems: 'center',
    justifyContent: 'center',
 
 },
 title:{
  fontSize:28,
  fontWeight:"bold",
  color:"#e90e0e",
 },
 input:{
  width:250,
  borderWidth:1,
  borderColor:"#e91414",
  padding:12,
  margin:10,
  // marginBottom:25,
  borderRadius:25,
 },
 button:{
  border:1,
  fontSize:20,
  padding:12,
  borderRadius:10,
  color:"blue",
  marginRight:70,
  marginLeft:70,
  backgroundColor:"tomato",
 }
 

});