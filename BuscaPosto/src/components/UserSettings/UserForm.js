import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import NameForm from './NameForm';
import FuelForm from './FuelForm';
import AsyncStorage from '@react-native-community/async-storage';

lineWidth = Dimensions.get('window').width * 0.90

export default class UserForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: "Place Holder",
		}
	}

	async logOut(){
		let data = {
			authorized: false,
			name: null
		}
		data = JSON.stringify(data);
		try {
		  await AsyncStorage.setItem('logged', data);
		  this.props.navigation.navigate('Login');
		} catch (e) {
		    // saving error
		}
	}

	render(){
		return(
			<View style = {styles.container}>
				<NameForm />
				<View style = {styles.line} />
				<FuelForm />
				<View style = {styles.bottomView}>
					<TouchableOpacity 
					style = {styles.logOutButton}
					onPress = {() => this.logOut()}
					>
						<Text style = {styles.textButton}> LOG OUT </Text>
					</TouchableOpacity>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
	},
	line: {
		height: 5,
		alignSelf: 'center',
		width: lineWidth,
		backgroundColor: '#5D5D5D'
	},
	bottomView:{
		width: '100%', 
		position: 'absolute', 
		bottom: 0
	},
	logOutButton:{
		alignSelf: 'stretch',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFE600',
		borderRadius: 5,
	},
	textButton:{
		fontWeight: 'bold',
		fontSize: 18,
		color: '#000000'
	}
})