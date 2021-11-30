import React, {useEffect, useState} from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';



const Buscar = ({navigation}) => {

  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.container2}>
      <View style={{ flex: 1}}>
      {/* Primeira Coluna */}
      <TouchableOpacity onPress={()=> navigation.navigate('ServicosBusca')}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/cozinheiro.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('ServicosBusca')}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/jardineiro.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('ServicosBusca')}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/fotografia.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('ServicosBusca')}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/encanador.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('ServicosBusca')}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/designer.jpg')}
      />
      </TouchableOpacity>

      </View>
      <View style={{ flex: 1}}>
      {/* Segunda Coluna */}
      <TouchableOpacity onPress={()=> navigation.navigate('ServicosBusca')}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/eletricista.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('ServicosBusca')}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/pedreiro.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('ServicosBusca')}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/editor.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('ServicosBusca')}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/producer.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('ServicosBusca')}>
      <Image style={styles.imagens}
       source={require('./../../../imagens/nutricionista.jpg')}
      />
      </TouchableOpacity>
      </View>
      </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,
  },
  imagens:{
    width: 175,
    height: 100,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 10,
    flexDirection: "row",
  },
});

export default Buscar;