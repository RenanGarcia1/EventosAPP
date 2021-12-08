
import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Picker, Image} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';
import { doc, setDoc, getFirestore } from 'firebase/firestore'
import Iventus from './../../imagens/Iventus.png'

  
export default function signin( {navigation} ){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [nome, setNome] = useState('');
  const [ocultarSenha, setOcultarSenha] = useState (true);

  function signinFirebase(){

    const db = getFirestore();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha, celular, nome, cpf)
      .then((cred) => {
        const user = cred.user;
        console.log(user.uid)
        console.log(email)
        console.log(senha)
        console.log(celular)
        console.log(nome)
        console.log(cpf)
        navigation.navigate("Principal")
        setDoc(doc(db, "users", user.uid), {
        Nome: nome,
        Celular: celular,
        CPF: cpf, 
      });
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
  } else {
    console.log("nao logado")
  }
  
});

  return(
    <View style={styles.background}>
      <View style={styles.containerLogo}>
      <Image source={Iventus}
       style={{width: 180, height: 180}} />
      </View>
      <TextInput style={styles.input} 
       placeholder= {"Nome"}
       onChangeText = {nome => setNome(nome)}
       />
       <TextInput style={styles.input}
       placeholder="Email"
       onChangeText = {email => setEmail(email)}
       value = {email}
       />

       <View style={styles.areaSenha}>
       <TextInput style={styles.input}
       placeholder="Senha"
       onChangeText = {senha => setSenha(senha)}
       value = {senha}
       secureTextEntry={ocultarSenha}
       />
       <TouchableOpacity style={styles.icon} onPress={ () => setOcultarSenha(!ocultarSenha)}>
        {ocultarSenha ?
          <Ionicons name="eye" color="#FFF" size={25} />
          :
          <Ionicons name="eye-off" color="#FFF" size={25} />
        }
       </TouchableOpacity>
       </View>
       <TextInputMask style={styles.input}
       placeholder={'CPF'}
       onChangeText = {cpf => setCpf(cpf)}
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
       value={celular}
       onChangeText={ celular => setCelular(celular)}
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
    width: '100%',
   },

  input:{
    width: '90%',
    marginBottom: 5,
    color: '#222',
    fontSize: 17,
    borderBottomWidth: 1,
    padding: 10,

  },
  cpf:{
    marginBottom: 15,
  },

  btnSubmit:{
    backgroundColor: '#0e47e6',
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
  areaSenha:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon:{
    width: 40,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0e47e6',
    borderRadius: 7,
  },
  checkboxContainer:{
  }


});
