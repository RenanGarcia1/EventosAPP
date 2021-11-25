import React,{useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import {doc, getFirestore, getDoc, getDocs, collection} from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const meusServicos = ({navigation}) => {
  const[data, setData] = useState([]);
    const [nomeS, setNomeS] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  useEffect(async()=> {
    const db = getFirestore();
    const user = getAuth();
    console.log(user)
    const document = await getDoc(doc(db, "services", user.lastNotifiedUid))
    console.log(document.data())
    setNomeS(document.data().NomeServico)
    setDescricao(document.data().Descricao)
    setPreco(document.data().Preco)
  })
  

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.textos}>
     <Text style={styles.text}>Meus Serviços</Text>
     <Text style={styles.text2} onPress={()=> navigation.navigate('Cadastrar Serviço')}>
         Não possui nenhum serviço e deseja cadastrar?
     </Text>
     </View>
      <FlatList
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
}
});

export default meusServicos;