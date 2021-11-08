
import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, CheckBox, Image} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


  
export default function signin( {} ){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cell, setCell] = useState('');
  const [cpf, setCpf] = useState('');

  function signinFirebase(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
   }

   const auth = getAuth();
   onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("logado " +user.uid)
    const uid = user.uid;
    navigation.navigate("Principal")
  } else {
    console.log("nao logado")
  }
  
});



  return(
    <View style={styles.background}>

      <View style={styles.containerLogo}>
      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Yellow_circle_50%25.svg/200px-Yellow_circle_50%25.svg.png'}}
       style={{width: 200, height: 200}} />
      </View> 
      <TextInput style={styles.input} 
       placeholder= {"Nome"}
       />
       <TextInput style={styles.input}
       placeholder="Email"
       onChangeText = {email => setEmail(email)}
       value = {email}
       />
       <TextInput style={styles.input}
       placeholder="Senha"
       onChangeText = {senha => setSenha(senha)}
       value = {senha}
       />




       <Text style={styles.label}>CPF ou CNPJ</Text>
       <Text style={styles.cpf} >Tipo cadastro escolhido: {"CPF"}</Text>
       <TextInputMask style={styles.input}
       placeholder={ "CPF"}
       type={'cpf'}
       value={cpf}
       />

       <TextInputMask 
       style={styles.input}
       type={'cel-phone'}
       placeholder="(99)99999-9999"
       options={{
         maskType: 'BRL',
         withDDD:true,
         dddMask: '(99)'
       }}
       value={cell}
       onChangeText={ text => setCell(text)}
       />

      <TouchableOpacity style={styles.btnSubmit} onPress={()=> {signinFirebase()}}>
        <Text style={styles.submitText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>

  )
};

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0037A8',
    width: '100%',
   },

  input:{
    backgroundColor: '#FFF',
    width: '90%',
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 8,
    marginBottom: 15,
  },
  cpf:{
    marginBottom: 15,
  },

  btnSubmit:{
    backgroundColor: '#09569C',
    width: '50%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  },
  containerLogo:{
    marginBottom: 50,
    justifyContent: 'center',

  },


});
