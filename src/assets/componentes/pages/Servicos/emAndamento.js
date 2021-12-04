
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function emAndamento() {

  const[propostas, setPropostas] = useState();

  useEffect(async()=> {
        
    const db = getFirestore();
    const user = getAuth();

    var c = collection(db,'propostas')
    var q = query(c, where('Destinatario','==', user.lastNotifiedUid))
    var data = []
    getDocs(q).then(res=>{
      res.forEach(doc=>{
        var newDoc = doc.data()
        newDoc.id = doc.id
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
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: '#0e47e6'}}>Em Andamento</Text>
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