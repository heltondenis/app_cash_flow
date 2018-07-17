import React, { Component } from 'react';
import StackNavigator from 'react-navigator';

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