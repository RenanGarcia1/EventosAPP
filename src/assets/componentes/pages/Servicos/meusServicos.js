import React,{useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import {doc, getFirestore, getDoc, getDocs, collection,  query, where} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import Icon from 'react-native-vector-icons/Feather';

const meusServicos = ({navigation}) => {
     
   const[servicos, setServicos] = useState();
      
   useEffect(async()=> {

    const db = getFirestore();
    const user = getAuth();

    var c = collection(db,'services')
    var q = query(c, where('Usuario','==', user.lastNotifiedUid))
    var data = []
    getDocs(q).then(res=>{
      res.forEach(doc=>{
        var newDoc = doc.data()
        newDoc.id = doc.id
        data.push(newDoc) 
      })
      setServicos(data)
    })
    console.log(servicos)
  },[])
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.textos}>
     <Text style={styles.text}>Meus Serviços</Text>
     <Text style={styles.text2} onPress={()=> navigation.navigate('Cadastrar Serviço')}>
         Cadastrar Serviço
     </Text>
     </View>
      {
        servicos &&
        <FlatList
          data = {servicos}
          renderItem={({item})=>
            <View style={styles.info} key={item.id} >
              <Text style={styles.NomeSer}> {item.NomeServico} </Text>
              <Text style={styles.Preco}>Preço: {item.Preco} </Text>
              <Text style={styles.categoria}>Categoria: {item.Categoria} </Text>
              <TouchableOpacity onPress={()=> navigation.push('Alterar Dados Servicos',{id: item.id})}>
              <Icon style={styles.icon} name="edit" color="#0e47e6" size={25}/>
              </TouchableOpacity>
              </View>
          }
        />
      }
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#adacac',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 32,
  },
  
text:{
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15, 
    marginLeft: 15
},

text2:{
    color: 'blue',
    marginLeft: 15
    
},

textos:{
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
},

info:{
  borderWidth: 1,
  marginBottom: 5,
  marginLeft: 5,
  marginRight: 5,
  borderColor: '#adacac',
  backgroundColor: '#dfe9f5'
},

NomeSer:{

 fontSize:20,
 color: '#466bd4',
 marginBottom: 2,
 fontWeight: 'bold',
},

Preco:{
  fontSize:14,
  marginLeft: 7,
  marginBottom: 2
},

categoria:{
  fontSize:14,
  marginLeft: 7,
  marginBottom: 2
},

icon:{
  marginLeft: 7,
  marginBottom: 7,
}

});

export default meusServicos;