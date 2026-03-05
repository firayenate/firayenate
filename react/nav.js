import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,TextInput,Button,TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './homme';
const Stack = createNativeStackNavigator();
function LoginScreen({ navigation }){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input}placeholder='Enter username'/>
         <TextInput style={styles.input}
         placeholder='Enter password' 
         secureTextEntry='true'/>
        <TouchableOpacity style={styles.button}
        onPress={()=>navigation.navigate('Home')}>login</TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({ 
container: { 
flex:1, 
backgroundColor: '#f2f2f2', 
justifyContent: 'center', 
alignItems:'center' 
}, 
title:{ 
fontSize:32, 
marginBottom:25, 
fontWeight:"bold", 
textAlign:"center", 
}, 
input:{ 
width:250, 
borderWidth:1, 
borderColor:"gray", 
padding:12, 
marginBottom:25, 
borderRadius:5, 
}, 
button:{ 
backgroundColor:"#df7575", 
borderRadius:5, 
padding:12, 
}, 
buttontext:{ 
textAlign:"center", 
fontSize:18, 
fontWeight:"bold", 
color:"#fff", 
} 
});