
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/assets/screens/Login';
import Cadastro from './src/assets/componentes/pages/CadastroConta';
import Principal from './src/assets/componentes/pages/TelaPrincipal';
import Favoritos from './src/assets/componentes/pages/Perfil/favoritos';
import AlterarDados from './src/assets/componentes/pages/Perfil/alterarDados';
import Configurações from './src/assets/componentes/pages/Perfil/configuracoes';
import Andamento from './src/assets/componentes/pages/Servicos/emAndamento';
import Encerrados from './src/assets/componentes/pages/Servicos/encerrados';
import MeusServiços from './src/assets/componentes/pages/Servicos/meusServicos';
import CadastrarServiço from './src/assets/componentes/pages/Servicos/cadastrarServico';
import Buscar from './src/assets/componentes/pages/Buscar/index';


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
        <Stack.Screen 
        name="Favoritos"
        component={Favoritos}
        />
        <Stack.Screen 
        name="Alterar Dados"
        component={AlterarDados}
        />
        <Stack.Screen 
        name="Configurações"
        component={Configurações}
        />
        <Stack.Screen 
        name="Andamento"
        component={Andamento}
        />
        <Stack.Screen 
        name="Encerrados"
        component={Encerrados}
        />
        <Stack.Screen 
        name="Meus Serviços"
        component={MeusServiços}
        />
        <Stack.Screen 
        name="Cadastrar Serviço"
        component={CadastrarServiço}
        />
        <Stack.Screen 
        name="Buscar"
        component={Buscar}
        />

       </Stack.Navigator>
    </NavigationContainer>

  );
}

