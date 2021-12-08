
import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { getFirestore, getDocs, collection,  query, where} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import Icon from 'react-native-vector-icons/Feather';

export default function servicosBusca({route, navigation}) {
  
  const {Categoria} = route.params
  const[servicos, setServicos] = useState();
  
  useEffect(async()=>{

    console.log(Categoria)
 
     const db = getFirestore();
     const user = getAuth();
 
     var c = collection(db,'services')
     var q = query(c, where('Categoria','==', Categoria))
     var data = []
     getDocs(q).then(res=>{
       res.forEach(doc=>{
         var newDoc = doc.data()
         console.log(doc.data())
         newDoc.id = doc.id
        if(doc.data().Usuario != user.lastNotifiedUid)
         data.push(newDoc) 
       })
       setServicos(data)
       console.log(servicos)
     })
  },[])

  return (
      <View elevation={60} style={styles.box2}>
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, marginBottom: 20, fontWeight: 'bold', color: '#0e47e6'}}>Resultados</Text>
      <View>
      {
        servicos &&
        <FlatList
          data = {servicos}
          renderItem={({item})=>
            <View style={styles.info} key={item.id} >
              <Text style={styles.NomeSer}> {item.NomeServico} </Text>
              <Text style={styles.Preco}>Preço Médio: {item.Preco} </Text>
              <Text style={styles.categoria}>Categoria: {item.Categoria} </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=> navigation.push('Formulario',{item})}>
              <Icon style={styles.icon} name="message-square" color="#0e47e6" size={25}/>
              </TouchableOpacity>
              <TouchableOpacity>
              <Icon style={styles.icon} name="heart" color="red" size={25}/>
              </TouchableOpacity>
              </View>
              </View>
          }
        />
      }
      </View>
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
      borderColor: '#adacac',
      backgroundColor: '#f0f3ff'
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
    

})