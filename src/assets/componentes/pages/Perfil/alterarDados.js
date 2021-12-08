import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, SafeAreaView, Modal, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { Avatar } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';

export default function alterarDados() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [Image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function Alterar(){
    const auth = getAuth();
    console.log(auth.lastNotifiedUid)
    const db = getFirestore();
        setDoc(doc(db, "users", auth.lastNotifiedUid), {
        Nome: nome,
        Celular: celular,
        CPF: cpf, 
        Image: Image,
        Descricao: desc
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
   }

  return(
    
    <SafeAreaView style = {styles.container}>
     <View style={{margin:20}}>
      <View style={{alignItems: 'center'}}>
      <TouchableOpacity>


      <Avatar 
      size="xlarge"
      rounded icon={{ name: 'user', type: 'font-awesome', color: '#0e47e6' }}
      onPress={() => setModalVisible(true)}
      source={Image}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Digite o link:</Text>
            <TextInput style={styles.input}
             placeholder="Link"
             placeholderTextColor="#666666"
             onChangeText = {e => setImage(e)}
             />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.submitText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      

      </TouchableOpacity>    
      <View style={styles.action}>
      <FontAwesome style = {styles.icons} name="user-o" size={20}/>
      <TextInput
          placeholder="Nome"
          placeholderTextColor="#666666" 
          autoCorrect={false}
          onChangeText = {nome => setNome(nome)}
          style={styles.textInput}
          />
      </View>
      <View style={styles.action}>
      <FontAwesome style = {styles.icons} name="id-card" size={20}/>
      <TextInputMask 
       placeholder={'CPF'}
       onChangeText = {cpf => setCpf(cpf)}
       type={'cpf'}
       value={cpf}
       />
      </View>
      <View style={styles.action}>
      <FontAwesome style = {styles.icons} name="mobile" size={20}/>
      <TextInputMask 
       style={styles.input}
       type={'cel-phone'}
       placeholder="(99)99999-9999"
       options={{
         maskType: 'BRL',
         withDDD:true,
         dddMask: '(99)'
       }}
       value={celular}
       onChangeText={ celular => setCelular(celular)}
       />
      </View>
      <TouchableOpacity style={styles.btnSubmit} onPress={()=> {Alterar()}}>
        <Text style={styles.submitText}>Alterar</Text>
      </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%'
  },
 tinyLogo:{
   alignItems: 'center',
   justifyContent: 'center',
   width: 125,
   height: 125,
 },
 action:{
     flexDirection: 'row',
     marginTop: 50,
     paddingBottom:5,
     borderBottomWidth: 1,
     width: '100%',
     borderBottomColor: '#a6a1a1',
 },
 icons:{
     color: "#0e47e6",
 },
 textInput:{
     marginLeft: 10,
     alignItems: 'center',
     justifyContent: 'center',
     fontSize: 15,
 },
 btnSubmit:{
   backgroundColor: '#09569C',
   width: '50%',
   height: 45,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 7,
   marginTop: 40,
 },
 centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
button: {
  borderRadius: 5,
  padding: 10,
  elevation: 2
},
buttonClose: {
  backgroundColor: "#2196F3",
  height: 40,
  textAlign: "center",
},
modalText: {
  marginBottom: 15,
  textAlign: "center",
}
 
})
