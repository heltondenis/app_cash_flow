import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import firebase from './FirebaseConnection.js';

export default class Cadastro extends Component {

	static navigationOptions = {
		title:"Cadastro",
		headerStyle:{
			backgroundColor: '#6dd5ed'
		},
		headerTintColor:'white'
	}	

	constructor(props) {
	  super(props);
	  this.state = {
	  	emailInput:'',
	  	senhaInput:''
	  };

	  this.cadastrar = this.cadastrar.bind(this);

	  firebase.auth().signOut();
	}

	/* Métodos */
	cadastrar(){
		if (this.state.emailInput != '' && this.state.senhaInput != '') {

			firebase.auth().onAuthStateChanged((user)=>{
				if(user){
					let uid = user.uid;
					firebase.database().ref('users').child(uid).set({
						saldo:0
					});

					this.props.navigation.navigate('Interna');
				}
			});

			firebase.auth().createUserWithEmailAndPassword(
				this.state.emailInput,
				this.state.senhaInput
			).catch((error)=>{
				alert(error.code);
			});
		}
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>E-mail:</Text>
				<TextInput style={styles.input} onChangeText={(emailInput)=>this.setState({emailInput})} />

				<Text>Senha:</Text>
				<TextInput secureTextEntry={true} style={styles.input} onChangeText={(senhaInput)=>this.setState({senhaInput})} />

				<Button title="Cadastrar" onPress={this.cadastrar} />
			</View>
		);
	}
}

const styles = StyleSheet.create({

container:{
	margin:10
},
input:{
	height:40,
	padding: 5,
	marginBottom: 10
}

});