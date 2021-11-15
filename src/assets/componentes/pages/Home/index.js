import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from "react-native";


const Home = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, borderColor: '#a6a1a1', }}>
      <View style={{alignItems: 'flex-start'}}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Bem vindo, "Nome"</Text>
      </View>
      <View style={{alignItems: 'center'}}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/carrosel.png')}
       />
       </View>
      </View>
      <View elevation={2} style={styles.box2}>
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: '#0e47e6'}}>Sugestões</Text>
      </View> 
    </View>
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
    flex:3,
    marginLeft: 25,
    marginRight: 25,
  }
});

export default Home;