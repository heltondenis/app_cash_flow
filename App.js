import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Login from './src/Login';
import Interna from './src/Interna';


const Navegador = StackNavigator({
  Home:{
    screen:Home
  },
  Cadastro:{
    screen:Cadastro
  },
  Login:{
    screen:Login
  },
  Interna:{
    screen:Interna
  }
});

export default Navegador;