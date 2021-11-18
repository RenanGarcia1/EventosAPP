
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function meusServicos({navigation}) {
  return (
    <View style = {styles.container}>
     <Text style={styles.text}>Meus Serviços</Text>
     <Text style={styles.text2} onPress={()=> navigation.navigate('Cadastrar Serviço')}>
         Não possui nenhum serviço e deseja cadastrar?
     </Text>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 15,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    text2:{
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue'
        
    },

})