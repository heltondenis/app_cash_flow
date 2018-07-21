import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button} from 'react-native';
import HistoricoItem from './HistoricoItem.js';
import firebase from './FirebaseConnection.js';

export default class Interna extends Component {

	static navigationOptions = {
		title:"Home",
		headerStyle:{
			backgroundColor: '#6dd5ed'
		},
		headerTintColor:'white'
	}	

	constructor(props) {
	  super(props);
	  this.state = {
	  	saldo:0,
	  	historico:[],
	  };

	  this.addReceita = this.addReceita.bind(this);
	  this.addDespesa = this.addDespesa.bind(this);
	  this.sair = this.sair.bind(this);

	  /* Verificando se existe usuário cadastrado */
	  firebase.auth().onAuthStateChanged((user)=>{
	  	if (user) {
	  		
	  		/* Vai verificar se houve alteração no banco e atualizar o state.saldo */
	  		firebase.database().ref('users').child(user.uid).on('value', (snapshot)=>{

	  			let state = this.state;
	  			state.saldo = snapshot.val().saldo;
	  			this.setState(state);
	  		});

	  	} else {
	  		this.props.navigation.navigate('Home');
	  	}
	  });
	}

	/* Métodos */
	addReceita(){
		this.props.navigation.navigate('AddReceita');
	}
	addDespesa(){
		this.props.navigation.navigate('AddDespesa');
	}
	sair(){
		firebase.auth().signOut();
	}


	render(){
		return (
			<View style={styles.container}>
				<View style={styles.saldoArea}>
					<Text style={styles.saldo}>Saldo: R$ {this.state.saldo}</Text>
				</View>
				<FlatList
					style={styles.historico} 
					data={this.state.historico}
					renderItem={(item) => <HistoricoItem data={item} /> }
				/>
				<View style={styles.botaoArea}>
					<Button title="Receita" onPress={this.addReceita} />
					<Button title="Despesa" onPress={this.addDespesa} />
					<Button title="Sair" onPress={this.sair} />
				</View>
			</View>

		);
	}
}

const styles = StyleSheet.create({

	container:{
		flex:1
	},
	saldoArea:{
		paddingTop: 30,
		paddingBottom: 20,
		backgroundColor: '#6dd5ed'
	},
	saldo:{
		textAlign: 'center',
		color: 'white', 
		fontSize: 25
	},
	historico:{
		flex:1
	},
	botaoArea:{
		flexDirection: 'row',
		justifyContent: 'space-around', 
		paddingTop:10,
		paddingBottom:10,
		backgroundColor:'#DDDDDD'
	}


});