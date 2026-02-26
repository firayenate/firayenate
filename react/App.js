import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import aboutScreen from './about';
import contactScreen from './contact';
import loginScreen from './loginpage';
import servicesScreen from './service';
const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  return ( 
        <View style={styles.container}>
        <View style={styles.container2}>
      <Text style={styles.title}>Mobile App</Text>
       
      <TouchableOpacity style={styles.about} onPress={() => navigation.navigate('about')}>
      <Text style={styles.buttontext}>about</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.service} onPress={() => navigation.navigate('services')}>
      <Text style={styles.buttontext}>services</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.contact} onPress={() => navigation.navigate('contact')}>
      <Text style={styles.buttontext}>contact</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('login')}>
      <Text style={styles.buttontext}>Login</Text>
     </TouchableOpacity>
     
      </View>
        <StatusBar style="auto" />
 </View>

  );}

export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="home" component={LoginScreen} />
        <Stack.Screen name="about" component={aboutScreen} />
        <Stack.Screen name="services" component={servicesScreen} />
        
        <Stack.Screen name="contact" component={contactScreen} />
        <Stack.Screen name="login" component={loginScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor: '#98989c',
    justifyContent: 'center',
    alignItems:'center'
    
  },
  title:{
fontSize:40,
padding:10,
marginBottom:25,
fontWeight:"bold",
textAlign:"center",
border:"1px black solid",
backgroundColor: "tomato",
borderRadius:20,
color:"white",
  },

about:{
backgroundColor:"tomato",
borderRadius:20,
padding:12,
margin:5,
textAlign:'center',
},
 

service:{
backgroundColor:"tomato",
borderRadius:20,
padding:12,
margin:5,
textAlign:'center',
},
contact:{
backgroundColor:"tomato",
borderRadius:20,
padding:12,
margin:5,
textAlign:'center',
},
login:{
backgroundColor:"tomato",
borderRadius:20,
padding:12,
margin:5,
textAlign:'center',
},

buttontext:{
  textAlign:"center",
  fontSize:20,
  fontWeight:"bold",
  color:"#fdfdfa",
  padding: 13 ,
  paddingLeft: 10,
  marginRight:25,
  gap:10,
}
});