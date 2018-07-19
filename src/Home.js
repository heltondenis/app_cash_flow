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
		this.props.navigation.navigate('Cadastro');
	}

	login(){
		this.props.navigation.navigate('Login');
	}
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Fluxo de Caixa v1.0</Text>
				<View style={styles.buttonArea}>
					<TouchableHighlight underlayColor="#CCCCCC" style={styles.button} onPress={this.cadastrar}>
					<Text style={styles.btnText} >Cadastrar</Text>
					</TouchableHighlight>

					<TouchableHighlight underlayColor="#CCCCCC" style={styles.button} onPress={this.login}>
					<Text style={styles.btnText} >Login</Text>
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
	},
	buttonArea:{
		marginTop: 30,
	},
	button:{
		backgroundColor: '#bfb300',
		margin: 10,
		height: 40,
		width: 200,
		justifyContent: 'center'
	},
	btnText:{
		color: '#FFFFFF',
		textAlign: 'center'
	}

});











