import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Buscar from './pages/Buscar';
import Serviços from './pages/Servicos';

import {Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                backgroundColor: '#1F282F',
                borderTopColor: 'transparent'
            },
            activeTintColor: '#FFFFFF',
            tabStyle: {
                tabStyle:{
                    paddingBottom:5,
                    paddingTop:5,
                }  
            }
        }}
        >
       <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Serviços"
        component={Serviços}
        options={{
          tabBarLabel: 'Servicos',
          tabBarIcon: ({ color, size }) => (
            <Feather name="briefcase" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    );

}


