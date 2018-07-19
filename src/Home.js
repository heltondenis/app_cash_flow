import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class Home extends Component {

	static navigationOptions = {
		title:"Home",
		header:null
	}

	/* Métodos */

	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.cadastrar = this.cadastrar.bind(this);
	  this.login = this.login.bind(this);
	}

	cadastrar(){
		alert("Cadastrar");
	}

	login(){
		alert("Login");
	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Fluxo de Caixa v1.0</Text>
				<View>
					<TouchableHighlight onPress={this.cadastrar}>
					<Text>Cadastrar</Text>
					</TouchableHighlight>

					<TouchableHighlight onPress={this.login}>
					<Text>Login</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	title:{
		fontSize: 30,
		backgroundColor: 'transparent'
	},

	container:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'  
	}
});