import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

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
	  	emailInput: '',
	  	senhaInput: ''
	  };

	  this.cadastrar = this.cadastrar.bind(this);

	}

	/* Métodos */
	cadastrar(){

		if (this.state.emailInput != '' && this.state.senhaInput != '') {
			alert('cadastrado');
		} else {
			alert('erro');
		}

	}

	render(){
		return (
			<View style={styles.container}>
				<Text>E-mail:</Text>
				<TextInput style={styles.input} onChangeText={()=>this.setState({emailInput})} />

				<Text>Senha:</Text>
				<TextInput secureTextEntry={true} style={styles.input} onChangeText={()=>this.setState({senhaInput})} />

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