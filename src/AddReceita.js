import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TextInput} from 'react-native';
import firebase from './FirebaseConnection.js';

export default class AddReceita extends Component {

	static navigationOptions = {
		title:"Adicionar Receita",
		headerStyle:{
			backgroundColor: '#6dd5ed'
		},
		headerTintColor:'white'
	}	

	constructor(props) {
	  super(props);
	  this.state = {
	  	valor: ''
	  };

	this.add = this.add.bind(this);
	}

	/* Métodos */
	add(){
		if (this.state.valor != '') {

			let uid = firebase.auth().currentUser.uid;
			let key = firebase.database().ref('historico').child(uid).push().key;

			/* Update */
			firebase.database().ref('historico').child(uid).child(key).set({
				type:'receita',
				valor:this.state.valor
			});

			alert("Adicionou no histórico");
		}
	}


	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.lblReceita}>Adicione uma Receita:</Text>
				<TextInput 
				keyboardType="numeric" 
				style={styles.btnAdd} 
				onChangeText={(valor)=>this.setState({valor})} 
				/>
				<Button title="Adicionar +" onPress={this.add}></Button>
			</View>

		);
	}
}

const styles = StyleSheet.create({

	container:{
		flex:1
	},

	btnAdd:{
		height:40,
		marginTop:20
	},

	lblReceita:{
		marginTop:20
	}


});