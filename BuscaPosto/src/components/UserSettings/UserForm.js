import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import NameForm from './NameForm';
import FuelForm from './FuelForm';

lineWidth = Dimensions.get('window').width * 0.90

export default class UserForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: "Place Holder",
		}
	}
	render(){
		return(
			<View style = {styles.container}>
				<NameForm />
				<View style = {styles.line} />
				<FuelForm />
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container:{
		alignItems: 'center',
	},
	line: {
		height: 5,
		alignSelf: 'center',
		width: lineWidth,
		backgroundColor: '#5D5D5D'
	}
})