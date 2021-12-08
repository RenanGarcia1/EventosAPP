
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function Notification({navigation}) {
  return (
    <View style = {styles.container}>
     <Text style={styles.text}>Opções de Serviço</Text>
     <TouchableOpacity style={styles.btnSubmit} onPress={()=> navigation.navigate('Andamento')}>
        <Text style={styles.submitText}>Em andamento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSubmit2} onPress={()=> navigation.navigate('Meus Serviços')}>
        <Text style={styles.submitText}>Meus serviços</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSubmit3} onPress={()=> navigation.navigate('Encerrados')}>
        <Text style={styles.submitText}>Encerrados</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSubmit4} onPress={()=> navigation.navigate('Propostas')}>
        <Text style={styles.submitText}>Propostas Recebidas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    btnSubmit:{
      backgroundColor: '#1d91a1',
      width: '50%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginTop: 40,
    },
    btnSubmit2:{
      backgroundColor: '#1da144',
      width: '50%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginTop: 40,
    },
    btnSubmit3:{
      backgroundColor: '#eb7610',
      width: '50%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginTop: 40,
    },
    btnSubmit4:{
      backgroundColor: '#f7e454',
      width: '50%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginTop: 40,
    },

})