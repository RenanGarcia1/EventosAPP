
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/assets/screens/Login';
import Cadastro from './src/assets/componentes/pages/CadastroConta';
import Principal from './src/assets/componentes/pages/TelaPrincipal';



const Stack = createStackNavigator();

export default function App({  }){
 
  return(
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen 
        name="Login"
        component={Login}
        />
        <Stack.Screen 
        name="Cadastro"
        component={Cadastro}
        />
        <Stack.Screen 
        name="Principal"
        component={Principal}
        />

       </Stack.Navigator>
    </NavigationContainer>

  );
}

