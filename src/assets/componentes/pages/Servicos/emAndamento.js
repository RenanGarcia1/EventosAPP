
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function emAndamento() {
  
  return (
    <View style = {styles.container}>
     <Text style={styles.text}>Em Andamento</Text>
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

})