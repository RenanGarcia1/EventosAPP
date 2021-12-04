import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function favoritos() {
  return (
    <View style = {styles.container}>
      <View elevation={60} style={styles.box2}>
      <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: '#0e47e6'}}>Em Andamento</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 20,
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