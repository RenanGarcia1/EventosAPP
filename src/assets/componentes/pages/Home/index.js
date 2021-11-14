import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Home = ({navigation}) => {

  return (
    <ScrollView>
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>
      <View style={{ flex: 1, alignItems: 'center',}}>
       <Text style={{fontSize: 20, fontWeight: 'bold'}}>Bem vindo, "Nome"</Text>
       <View style={{alignItems: 'flex-start'}}>
       <Image style={styles.imagens}
       source={require('./../../../imagens/procurando.jpg')}
       />
       <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', paddingTop: 20, textAlign: 'center'}}>Sugestões de Serviços disponiveis:</Text>
      </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Text style={styles.texto2}>Procurando serviços disponiveis para serem contratados?</Text>
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
    width: 195,
    height: 150,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: 'center',
  },
  texto:{
    fontSize: 23, 
    fontWeight: 'bold',
    color: '#0e47e6',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 21,
    paddingLeft: 30
  },
  texto2:{
    fontSize: 23, 
    fontWeight: 'bold',
    color: '#0e47e6',
    textAlign: 'center',
    paddingTop: 57,
  },
});

export default Home;