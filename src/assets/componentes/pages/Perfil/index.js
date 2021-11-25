import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, StyleSheet} from 'react-native';
import {Title, Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, getDoc, doc } from '@firebase/firestore';
import { Avatar } from "react-native-elements";


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
    const [nome, setNome] = useState('');
    const [Image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    useEffect(async()=> {
      const db = getFirestore();
      const user = getAuth();
      console.log(user)
      const document = await getDoc(doc(db, "users", user.lastNotifiedUid))
      console.log(document.data())
      setNome(document.data().Nome)
      setImage(document.data().Image)
      setDesc(document.data().Descricao)
    })

  return (
    <SafeAreaView style = {styles.container}>
       <View style={styles.userInfoSection}>  
       <View style={{flexDirection:'row', marginTop: 15, marginLeft: 15}}>  
         
         <Avatar
          rounded
          size="large"
          source={{uri: Image}}
         />

           <View style={{marginLeft: 20}}>
              <Title style={styles.title, { marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>{nome}</Title>
           </View>
         </View>
       </View>

       <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
        <Title>{desc}</Title>
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