import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import UserForm from './UserForm';

export default class UserSettings extends Component{

	render(){
		return(
			<View style = {styles.container}>
				<View style = {styles.avatarContainer}>
					<Image style = {styles.avatarImage} source = {require("../../images/avatarExample.jpg")}/>
				</View>
				<UserForm />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		height: '100%',
		width: '100%',
		padding: 10,
		backgroundColor: '#3D3D3D',
		alignItems: 'center'
	},
	avatarContainer:{
		marginTop: 10,
	    height: 200,
	    width: 200,
	    borderRadius: 100,
	    overflow: 'hidden',
	    borderWidth: 2,
	    borderColor: '#5D5D5D'
	},
	avatarImage:{
		height: 200,
	    width: 200,
	    borderRadius: 100,
	},
	name: {
		marginTop: 10,
		fontWeight: 'bold',
		color: '#FFFFFF',
		fontSize: 18
	}
})