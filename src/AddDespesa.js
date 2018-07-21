import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button} from 'react-native';
import firebase from './FirebaseConnection.js';

export default class AddDespesa extends Component {

	static navigationOptions = {
		title:"Adicionar Despesas",
		headerStyle:{
			backgroundColor: '#6dd5ed'
		},
		headerTintColor:'white'
	}	

	constructor(props) {
	  super(props);
	  this.state = {
	  	receitas:{

	  	}
	  };

	
	}

	/* Métodos */
	addReceita(){
		alert('Receita');
	}
	addDespesa(){
		alert('Despesa');
	}
	sair(){
		firebase.auth().signOut();
	}


	render(){
		return (
			<View style={styles.container}>
				<Text>...</Text>
			</View>

		);
	}
}

const styles = StyleSheet.create({

	container:{
		flex:1
	}


});