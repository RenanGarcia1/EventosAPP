import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feater from 'react-native-vector-icons/Feather';
import perfil from './../../../imagens/perfil.png';

export default function alterarDados() {
  return (
    <SafeAreaView style = {styles.container}>
     <View style={{margin:20}}>
      <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() =>{}}>
      <Image
        style={styles.tinyLogo}
        source={require('./../../../imagens/perfil.png')}  
      />
          </TouchableOpacity>    

      <View style={styles.action}>
      <FontAwesome style = {styles.icons} name="user-o" size={20}/>
      <TextInput
          placeholder="Nome"
          placeholderTextColor="#666666" 
          autoCorrect={false} 
          style={styles.textInput}
          />
      </View>
      <View style={styles.action}>
      <FontAwesome style = {styles.icons} name="envelope" size={20}/>
      <TextInput
          placeholder="Email"
          placeholderTextColor="#666666" 
          autoCorrect={false} 
          style={styles.textInput}
          />
      </View>
      <View style={styles.action}>
      <FontAwesome style = {styles.icons} name="id-card" size={20}/>
      <TextInput
          placeholder="CPF"
          placeholderTextColor="#666666" 
          autoCorrect={false} 
          style={styles.textInput}
          />
      </View>
      <View style={styles.action}>
      <FontAwesome style = {styles.icons} name="mobile" size={20}/>
      <TextInput
          placeholder="Celular"
          placeholderTextColor="#666666" 
          autoCorrect={false} 
          style={styles.textInput}
          />
      </View>
      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}>Alterar</Text>
      </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%'
  },
 tinyLogo:{
   alignItems: 'center',
   justifyContent: 'center',
   width: 125,
   height: 125,
 },
 action:{
     flexDirection: 'row',
     marginTop: 50,
     paddingBottom:5,
     borderBottomWidth: 1,
     width: '100%',
     borderBottomColor: '#a6a1a1',
 },
 icons:{
     color: "#0e47e6",
 },
 textInput:{
     marginLeft: 10,
     alignItems: 'center',
     justifyContent: 'center',
     fontSize: 15,
 },
 btnSubmit:{
   backgroundColor: '#09569C',
   width: '50%',
   height: 45,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 7,
   marginTop: 40,
 },
 
})
