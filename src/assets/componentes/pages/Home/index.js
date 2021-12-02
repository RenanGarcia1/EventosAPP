import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import Slideshow from 'react-native-image-slider-show';
import { getAuth } from "@firebase/auth";
import { doc, getDoc, getFirestore } from "@firebase/firestore";

const Home = ({}) => {
  const[nome, setNome] = useState("");

  useEffect(async()=> {
    const db = getFirestore();
    const user = getAuth();
    console.log(user)
    const document = await getDoc(doc(db, "users", user.lastNotifiedUid))
    console.log(document.data())
    setNome(document.data().Nome)
  })

  return (
    <ScrollView>
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, borderColor: '#a6a1a1', }}>
      <View style={{alignItems: 'flex-start'}}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Bem vindo, {nome}</Text>
      </View>
      <View style={{alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20}}>
      <Slideshow 
      indicatorColor='#0e47e6'
      titleStyle={styles.title}
      captionStyle={styles.caption}
      dataSource={
        
        [
        { 
          title: 'Arquitetura',
          caption: 'Semana do Arquiteto',
          url: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        },
        { 
          title: 'Arte',
          caption: 'Trabalhos artisticos disponíveis',
          url: 'https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
        },
        { 
          title: 'Contadores',
          caption: 'Fabio Yukio na Bolsa',
          url: 'https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }
       ]
      }
    />
       </View>
      </View>
      <View elevation={60} style={styles.box2}>
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: '#0e47e6'}}>Sugestões</Text>
      </View> 
      <View elevation={60} style={styles.box2}>
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: '#0e47e6'}}>Novidades</Text>
      </View>
      <View elevation={60} style={styles.box2}>
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: '#0e47e6'}}>Favoritos</Text>
      </View> 
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imagens:{
    marginTop: 25,
    width: 300,
    height: 150,
    borderRadius: 10,
  },
  box2:{
    marginLeft: 25,
    marginRight: 25,
    height: 400,
    marginTop: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#adacac',
  },
  title:{
     color: 'white',
     fontWeight: 'bold',
     fontSize: 21
  },
  caption:{
    color:'white',
    fontSize: 17
  }

}
);

export default Home;