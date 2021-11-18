import React from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { getAuth, signOut} from "firebase/auth";


function logoutFirebase(navigation){
  const auth = getAuth();
  signOut(auth).then(() => {
  console.log("deslogado")
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorCode, errorMessage);
});
}

export default function Perfil({navigation}) {
  return (
    <SafeAreaView style = {styles.container}>
       <View style={styles.userInfoSection}>
         <View style={{flexDirection:'row', marginTop: 15}}>
           
           <Avatar.Image style={{marginLeft: 15}}>
           source={require('./../../../imagens/perfil.png')}  
             size={100}
           </Avatar.Image>

           <View style={{marginLeft: 20}}>
              <Title style={styles.title, { marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Renan Garcia</Title>
           </View>
         </View>
       </View>

       <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
        <Title>XXX</Title>
        <Caption>xxx</Caption>
        </View>
        </View>


       <View style={styles.menuWrapper}>

         <TouchableRipple onPress={()=> navigation.navigate('Favoritos')}>
            <View style={styles.menuItem}>
              <Icon name="heart" color="#0e47e6" size={25}/>
              <Text style={styles.menuText}>Seus Favoritos</Text>
            </View>
         </TouchableRipple>

         <TouchableRipple onPress={()=> navigation.navigate('Configurações')}>
            <View style={styles.menuItem}>
              <Icon name="settings" color="#0e47e6" size={25}/>
              <Text style={styles.menuText}>Configurações</Text>
            </View>
         </TouchableRipple>
         
         <TouchableRipple onPress={()=> navigation.navigate('Alterar Dados')}>
            <View style={styles.menuItem}>
              <Icon name="edit" color="#0e47e6" size={25}/>
              <Text style={styles.menuText}>Alterar Dados</Text>
            </View>
         </TouchableRipple>

         <TouchableRipple onPress={() => {
           logoutFirebase();
           navigation.navigate('Login');     
           }}>
            <View style={styles.menuItem}>
              <Icon name="log-out" color="red" size={25}/>
              <Text style={styles.menuText}>Sair</Text>
            </View>
         </TouchableRipple>
         
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    menuItem:{
      flexDirection:'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuText:{
      fontSize: 20,
      marginLeft: 20,
  },

infoBoxWrapper:{
  justifyContent:'center',
  borderWidth: 1,
  marginTop: 25,
  marginBottom: 25,
  borderColor: '#a6a1a1',
  flexDirection:'row',
  height:100,
  
 },
 infoBox:{
  justifyContent:'center',
  alignItems: 'center'
 },
 btnOff:{
  backgroundColor: 'red',
  width: '40%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7,
  marginTop: 10,
  marginLeft: 120
},

})