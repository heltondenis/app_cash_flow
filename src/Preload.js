import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ImageBackground} from 'react-native';
import firebase from './FirebaseConnection.js';


export default class Preload extends Component {

	static navigationOptions = {
		title:"Preload",
		header:null
	}

	/* Métodos */
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  firebase.auth().onAuthStateChanged((user)=>{
	  	if (user) {
	  		this.props.navigation.navigate('Interna');
	  	} else {
	  		this.props.navigation.navigate('Home');
	  	}
	});
}

	render(){
		return (
			<ImageBackground source={require('../assets/img/Lunada.jpg')} style={styles.bg}>
				<View style={styles.container}>
					<Text style={styles.title}>Fluxo de Caixa v1.0</Text>
				</View>
			</ImageBackground>
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
		backgroundColor: '#6dd5ed',
		margin: 10,
		height: 40,
		width: 200,
		justifyContent: 'center'
	},
	btnText:{
		color: '#FFFFFF',
		textAlign: 'center'
	},
	bg:{
		flex:1,
		width:null
	}

});











