import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function favoritos() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>
      Serviços Favoritos
      </Text>
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
    }

})