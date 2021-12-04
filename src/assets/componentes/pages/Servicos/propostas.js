
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { doc, getFirestore, getDoc, getDocs, collection, query, where, setDoc} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

export default function propostas() {

  const[propostas, setPropostas] = useState();

  useEffect(async()=> {
        
    const db = getFirestore();
    const user = getAuth();

    var c = collection(db,'propostas')
    var q = query(c, where('Destinatario','==', user.lastNotifiedUid))
    var data = []
    getDocs(q).then(res=>{
      res.forEach(docRes=>{
        var newDoc = docRes.data()
        console.log(docRes.data())
        newDoc.id = docRes.id
        getDoc(doc(db, 'users', docRes.data().Destinatario)).then(doc=>{
          newDoc.nomeDestinatario = doc.data().Nome
        })
        getDoc(doc(db, 'users', docRes.data().Remetente)).then(doc=>{
          newDoc.nomeRemetente = doc.data().Nome
        })
        getDoc(doc(db, 'services', docRes.data().Servico)).then(doc=>{
          newDoc.NomeServico = doc.data().NomeServico
        })
        data.push(newDoc) 
      })
      setPropostas(data)
    })
  },[])
  
  useEffect(()=>{
    console.log(propostas)
  })
  return (
      <View elevation={60} style={styles.box2}>
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: '#0e47e6'}}>Propostas</Text>
      <FlatList
          data = {propostas}
          renderItem={({item})=>
            <View style={styles.info} key={item.id} >
              <Text style={styles.NomeSer}> {item.Destinatario} </Text>
              <Text style={styles.Preco}> {item.Remetente} </Text>
              <Text style={styles.categoria}> {item.Servico} </Text>
              <Text style={styles.NomeSer}> {item.Descricao} </Text>
              </View>
          }
        />
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
      height: 500,
      marginTop: 30,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#adacac',
    },

})