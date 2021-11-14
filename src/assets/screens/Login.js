
import React, {useState, useEffect} from 'react';
import { TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import 'react-native-gesture-handler';
require("./../../../firebaseConfig");

export default function Login( {navigation} ){
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

   function loginFirebase(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
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


  const [offset] = useState(new Animated.ValueXY({x: 0, y: 90}));

  useEffect(()=> {
    Animated.spring(offset.y, {
    toValue: 0, 
    speed: 4,
    bounciness: 15,
    useNativeDriver: true,
  }).start();
  }, []);
  

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Yellow_circle_50%25.svg/200px-Yellow_circle_50%25.svg.png'}}
       style={{width: 200, height: 200}} />
      </View>   
      
      <Animated.View 
      style={[
        styles.container,
        {
          transform: [
            { translateY: offset.y}
          ]
        }
        ]}>

       <TextInput style={styles.input}
       placeholder="Login"
       placeholderTextColor="#666666"
       onChangeText = {email => setEmail(email)}
       value = {email}
       />

       <TextInput style={styles.input}
       placeholder="Senha"
       placeholderTextColor="#666666"
       onChangeText = {senha => setSenha(senha)}
       value = {senha}
       />

      <TouchableOpacity style={styles.btnSubmit} onPress={()=> {loginFirebase()}}>
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.btnCad} onPress={()=> navigation.navigate("Cadastro")}>
        <Text style={styles.submitText}>Cadastrar</Text>
      </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>

  );
}


const styles = StyleSheet.create({
  background:{
   flex:1,
   alignItems: 'center',
   justifyContent: 'center',
   borderColor: '#FFF',
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center',

  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom:50
  },
  input:{
    width: '90%',
    marginBottom:15,
    color: '#222',
    fontSize: 17,
    borderBottomWidth: 1,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#318319',
    width: '70%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 30
  },
  btnOff:{
    backgroundColor: 'red',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10
  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  },
  btnRegister:{
    marginTop:15,

  },
  registerText:{
    color: '#FFF'
  },
  btnCad:{
    backgroundColor: '#09569C',
    width: '40%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
  },


  
});