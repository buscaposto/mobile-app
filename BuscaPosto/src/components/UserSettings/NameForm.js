import React, {Component} from 'react';
import {
	View, 
	Text,  
	StyleSheet, 
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class NameForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: '----'
		}
	}

	getName = async () => {
	  try {
	    const value = await AsyncStorage.getItem('logged');
	    response = JSON.parse(value);
	    this.setState({name: response.name})
	  }catch(e){
	  	this.setState({name: '----'})
	  }
	}

	componentDidMount(){
		this.getName();
	}

	render(){
		return(
			<View style = {styles.container}>
				<Text style = {styles.name}> {this.state.name.toString()} </Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container:{
		padding: 15
	},
	name: {
		fontWeight: 'bold',
		color: '#FFFFFF',
		fontSize: 18
	},
})