
import React, { useEffect, useState } from 'react';
import { TextInput,FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {doc, deleteDoc, getFirestore, getDoc, getDocs, collection,  query, where} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import Icon from 'react-native-vector-icons/Feather';


export default function Encerrados() {
  const[servicosDestinatario, setServicosDestinatario] = useState();
  const[servicosRemetente, setServicosRemetente] = useState();
      
  useEffect(async()=> {

   const db = getFirestore();
   const user = getAuth();

   var userRef = doc(db, 'users', user.lastNotifiedUid)

   var c = collection(db,'propostas')
   var q = query(c , where('Destinatario','==', userRef), where('status', '==', "encerrado" ))
   var data = []
   var data2 = []
   getDocs(q).then(res=>{
     res.forEach(doc=>{
       var newDoc = doc.data()
       newDoc.id = doc.id
       data.push(newDoc) 
     })
     setServicosDestinatario(data)
   })

   var q2 =  query(c , where('Remetente','==', userRef), where('status', '==', "encerrado" ))
   getDocs(q2).then(res=>{
    res.forEach(doc=>{
      var newDoc = doc.data()
      newDoc.id = doc.id
      data2.push(newDoc) 
    })
    setServicosRemetente(data2)
  })
   console.log(user.lastNotifiedUid)
  },[])
  
  useEffect(()=>{
    if (servicosDestinatario && servicosRemetente){
      console.log(servicosDestinatario)
      console.log(servicosRemetente)
    }
 })

  return (
    <View elevation={60} style={styles.box2}>
      {servicosDestinatario&&
      <>
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold'}}>Destinatarios Encerrados</Text>
      <FlatList
          data = {servicosDestinatario}
          renderItem={({item})=>{
            console.log(Object.keys(item))
            console.log(item)
            return(
              <View style={styles.info} key={item.id} >
                <Text style={styles.NomeSer}> {item.nomeServico}</Text>
                <Text style={styles.text2}> Destinatário: { item.nomeDestinatario} </Text>
                <Text style={styles.text2}> Remetente: { item.nomeRemetente} </Text>
                <Text style={styles.text2}> Orçamento: { item.orcamento} </Text>
                <Text style={styles.text2}> Descrição: { item.Descricao} </Text>
              </View>
            )
          }
          }
        />
        </>
        }

   {servicosRemetente&&
      <>
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold'}}>Remetentes Encerrados</Text>
      <FlatList
          data = {servicosRemetente}
          renderItem={({item})=>{
            console.log(Object.keys(item))
            console.log(item)
            return(
              <View style={styles.info} key={item.id} >
                <Text style={styles.NomeSer}> {item.nomeServico}</Text>
                <Text style={styles.text2}> Destinatário: { item.nomeDestinatario} </Text>
                <Text style={styles.text2}> Remetente: { item.nomeRemetente} </Text>
                <Text style={styles.text2}> Orçamento: { item.orcamento} </Text>
                <Text style={styles.text2}> Descrição: { item.Descricao} </Text>
              </View>
            )
          }
          }
        />
        </>
        }
      </View> 
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 15,
        marginLeft: 15
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    box2:{
      marginLeft: 25,
      marginRight: 25,
      height: 625,
      marginTop: 30,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#adacac',
    },
    NomeSer:{
    
      fontSize:20,
      color: '#466bd4',
      marginBottom: 2,
      fontWeight: 'bold',
     },
     
     text2:{
       fontSize:14,
       marginLeft: 7,
       marginBottom: 2
     },
     info:{
      borderWidth: 1,
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      borderColor: '#adacac',
      backgroundColor: '#dfe9f5'
    },
})