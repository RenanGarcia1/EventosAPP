import React,{useState} from 'react';
import { Pressable, Modal, Picker, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {setDoc, doc, getFirestore} from 'firebase/firestore';
import firebase from './../../../../../firebaseConfig';
import { getAuth } from "firebase/auth";
import { Avatar } from 'react-native-elements';


export default function cadastrarServico() {
  const [nomeS, setNomeS] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [ImageS, setImageS] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function cadastroServico(){
  
    const auth = getAuth();
    console.log(auth.lastNotifiedUid)
    const db = getFirestore();
        setDoc(doc(db, "services", auth.lastNotifiedUid), {
        NomeServico: nomeS,
        Descricao: descricao,
        Preco: preco, 
        Imagem: ImageS,
        Categoria: selectedValue,
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  }

  const alterarImagem=() =>{
    console.log(ImageS)
   }

  return (
    <SafeAreaView style = {styles.container}>
     <View style={{margin:20}}>
      <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() =>{}}>
          <Avatar 
      size="xlarge"
      icon={{ name: 'image', type: 'font-awesome', color: '#0e47e6' }}
      onPress={() => setModalVisible(true)}
      source={ImageS}
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
            <Text style={styles.modalText}>Link:</Text>
            <TextInput style={styles.input}
             placeholder="Link"
             placeholderTextColor="#666666"
             onChange = {e => setImageS(e.target.value)}
             />
            <Pressable
              style={[styles.button, styles.buttonClose, {marginBottom:15 }]}
              onPress={alterarImagem}
            >
            <Text style={styles.submitText} > Enviar </Text>
            </Pressable>
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
      <FontAwesome style = {styles.icons} name="tag" size={20}/>
      <TextInput
          placeholder="Nome do Serviço"
          placeholderTextColor="#666666" 
          onChangeText = {nomeS => setNomeS(nomeS)}
          autoCorrect={false} 
          style={styles.textInput}
          />
      </View>
      <View style={styles.action}>
      <FontAwesome style = {styles.icons} name="align-justify" size={20}/>
      <TextInput
          placeholder="Descrição"
          placeholderTextColor="#666666" 
          autoCorrect={false} 
          onChangeText = {descricao => setDescricao(descricao)}
          style={styles.textInput}
          />
      </View>
      <View style={styles.action}>
      <FontAwesome style = {styles.icons} name="money" size={20}/>
      <TextInput
          placeholder="Preco"
          placeholderTextColor="#666666" 
          autoCorrect={false} 
          onChangeText = {preco => setPreco(preco)}
          style={styles.textInput}
          />
      </View>
      <View style={styles.picker}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150, marginTop: -30 }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Cozinheiro" value='Cozinheiro' />
        <Picker.Item label="Eletricista" value='Eletricista' />
        <Picker.Item label="Jardineiro" value='Jardineiro' />
        <Picker.Item label="Pedreiro" value='Pedreiro' />
        <Picker.Item label="Fotografo" value='Fotografo' />
        <Picker.Item label="Editor de Video" value='Editor de Video' />
        <Picker.Item label="Encanador" value='Encanador' />
        <Picker.Item label="Designer" value='Designer' />
        <Picker.Item label="Programador" value='Programador' />
        <Picker.Item label="Nutricionista" value='Nutricionista' />
        <Picker.Item label="Arquiteto" value='Arquiteto' />
        <Picker.Item label="Artista" value='Arte' />
        <Picker.Item label="Contador" value='Contador' />

      </Picker>
      </View>
      <TouchableOpacity style={styles.btnSubmit} onPress={()=> {cadastroServico()}}>
        <Text style={styles.submitText}>Cadastrar Serviço</Text>
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
  picker:{
    flexDirection: 'row',
    marginTop: 50,
    paddingBottom:5,
    justifyContent: 'center',
    width: '100%',
    borderBottomColor: '#a6a1a1',
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
