import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, SafeAreaView, Modal, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {doc, getFirestore, getDoc, getDocs, collection, query, where, setDoc} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

export default function formulario({route}) {

    const{item} = route.params

    const[desc, setDesc] = useState('')

    useEffect(()=>{
      console.log(item)
      
    })

    const setProposta = async ()=>{
        const auth = getAuth();
        console.log(auth.lastNotifiedUid)
        const db = getFirestore();

          var nomeRemetente = await getDoc(doc(db, 'users',  auth.lastNotifiedUid))
          var nomeDestinatario = await getDoc(doc(db, 'users',  item.Usuario))
          var nomeServico = await getDoc(doc(db, 'services',  item.id))
          
          setDoc(doc(db, "propostas", `${Date.now()} ${Math.random()}`), {
             Remetente: doc(db, 'users',  auth.lastNotifiedUid),
             Destinatario : doc(db, 'users',  item.Usuario),
             Servico:  doc(db, 'services',  item.id),
             Descricao: desc,
             nomeServico: nomeServico.data().NomeServico || 'erro',
             nomeRemetente: nomeRemetente.data().Nome || 'erro',
             nomeDestinatario: nomeDestinatario.data().Nome || 'erro',
             status: 'inicial'
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
          });  
    }

  return(
    
    <SafeAreaView style = {styles.container}>
     <View style={{margin:20}}>
      <View style={styles.action}>
      <FontAwesome style = {styles.icons} name="align-justify" size={20}/>
      <TextInput
          multiline={true}
          placeholderTextColor="#666666" 
          autoCorrect={false} 
          style={styles.textInput}
          onChangeText = {value => setDesc(value)}
          />
      </View>
      <TouchableOpacity style={styles.btnSubmit} onPress={async ()=> { await setProposta()}}>
        <Text style={styles.submitText}>Enviar Proposta</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%'
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
     fontSize: 15,
     width: '100%',
     height: 400
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