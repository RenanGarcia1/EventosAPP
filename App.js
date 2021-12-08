
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/assets/componentes/pages/Login';
import Cadastro from './src/assets/componentes/pages/CadastroConta';
import Principal from './src/assets/componentes/pages/TelaPrincipal';
import AlterarDados from './src/assets/componentes/pages/Perfil/alterarDados';
import Configurações from './src/assets/componentes/pages/Perfil/configuracoes';
import Andamento from './src/assets/componentes/pages/Servicos/emAndamento';
import Encerrados from './src/assets/componentes/pages/Servicos/encerrados';
import MeusServiços from './src/assets/componentes/pages/Servicos/meusServicos';
import CadastrarServiço from './src/assets/componentes/pages/Servicos/cadastrarServico';
import Buscar from './src/assets/componentes/pages/Buscar/index';
import AlterarDadosServicos from './src/assets/componentes/pages/Servicos/alterarDadosServicos';
import Propostas from './src/assets/componentes/pages/Servicos/propostas';
import ServicosBusca from './src/assets/componentes/pages/Servicos/servicosBusca';
import Formulario from './src/assets/componentes/pages/Servicos/formulario';

const Stack = createStackNavigator();

export default function App({  }){
 
  return(
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen 
        name="Login"
        component={Login}
        options={{
          title: "Iventus", 
          headerLeft: null, 
          headerShown: true,
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Cadastro"
        component={Cadastro}
        options={{
          title: "Iventus", 
          headerShown: true,
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Principal"
        component={Principal}
        options={{
          title: "Iventus", 
          headerLeft: null, 
          headerShown: true,
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Alterar Dados"
        component={AlterarDados}
        options={{
          title: 'Voltar ao Perfil',
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Configurações"
        component={Configurações}
        options={{
          title: 'Voltar ao Perfil',
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Andamento"
        component={Andamento}
        options={{
          title: 'Voltar aos Serviços',
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Encerrados"
        component={Encerrados}
        options={{
          title: 'Voltar aos Serviços',
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Meus Serviços"
        component={MeusServiços}
        options={{
          title: 'Voltar aos Serviços',
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Cadastrar Serviço"
        component={CadastrarServiço}
        options={{
          title: 'Voltar aos Meus Serviços',
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Buscar"
        component={Buscar}
        />
        <Stack.Screen 
        name="Alterar Dados Servicos"
        component={AlterarDadosServicos}
        options={{
          title: 'Voltar aos Meus Serviços',
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Propostas"
        component={Propostas}
        options={{
          title: 'Voltar aos Serviços',
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="ServicosBusca"
        component={ServicosBusca}
        options={{
          title: 'Voltar a Busca',
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Formulario"
        component={Formulario}
        options={{
          title: 'Voltar aos Serviços',
          headerStyle: {
            backgroundColor: '#466bd4',
          },
          headerTintColor: '#fff',
        }}
        />

       </Stack.Navigator>
    </NavigationContainer>

  );
}

