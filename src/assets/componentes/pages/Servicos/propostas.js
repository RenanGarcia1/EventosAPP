
import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { doc, getFirestore, getDoc, getDocs, collection, query, where, setDoc,updateDoc} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import Icon from 'react-native-vector-icons/Feather';

export default function propostas() {

  const[propostas, setPropostas] = useState();
  const [orcamento, setOrcamento] = useState(0)
  const db = getFirestore()

  useEffect(async()=> {
        
    const db = getFirestore();
    const user = getAuth();

    var userQuery = await doc(db, 'users', user.lastNotifiedUid)

    var c = collection(db,'propostas')
    var q = query(c, where('Destinatario','==', userQuery), where('status', '==', 'inicial'))
    var data = []
    getDocs(q).then(res=>{
      res.forEach(docRes=>{
        var newDoc = docRes.data()
        console.log(docRes.data())
        newDoc.id = docRes.id
        getDoc(docRes.data().Remetente)
        .then(docRemetente => {
          newDoc.RemetenteNome = docRemetente.data().Nome
        })
        data.push(newDoc) 
      })
      setPropostas(data)
    })
  },[])
  
  useEffect(()=>{
    console.log(propostas)
  })

  const aceitar =async id => {
    var db = getFirestore()
    await updateDoc(doc(db, 'propostas', id), {
      status: 'andamento',
      orcamento: orcamento
    })

  }

  const recusar =async id => {
    var db = getFirestore()
    await updateDoc(doc(db, 'propostas', id), {
      status: 'encerrado',
    })

  }

  return (
      <View elevation={60} style={styles.box2}>
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: '#0e47e6'}}>Propostas</Text>
      {propostas&&
      <FlatList
          data = {propostas}
          renderItem={({item})=>{
            console.log(Object.keys(item))
            console.log(item)
            return(
              <View style={styles.info} key={item.id} >
                <Text style={styles.NomeSer}> {item.nomeServico}</Text>
                <Text style={styles.text2}> Remetente: { item.nomeRemetente} </Text>
                <Text style={styles.text2}> Descrição: { item.Descricao} </Text>
                <TextInput style={styles.input}
                  placeholder={'Orçamento'}
                  onChangeText = {preco => setOrcamento(preco)}
                  value={orcamento}       
                />
                <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity onPress={async () => await aceitar(item.id)}>
                <Icon style={styles.icon} name="check" color="green" size={25}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => await recusar(item.id)}>
                <Icon style={styles.icon} name="x" color="red" size={25}/>
                </TouchableOpacity>
                </View>
              </View>
            )
          }
          }
        />}
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
    info:{
      borderWidth: 1,
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      borderColor: '#adacac',
      backgroundColor: '#dfe9f5'
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

    input:{
      fontSize:14,
      marginBottom: 2,
      borderBottomWidth: 1,
      borderColor: '#adacac',
      marginLeft: 5,
      marginRight: 5,
    },
})