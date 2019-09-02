import React, {Component} from 'react';
import {View, Image,Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import NameForm from './NameForm';
import FuelForm from './FuelForm';
import AsyncStorage from '@react-native-community/async-storage';

lineWidth = Dimensions.get('window').width * 0.90

export default class UserForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			light: true,
		}
	}
	renderImage(){
		if(this.state.light){
			return(<Image style = {styles.icon} source = {require('../../images/nightModeU.png')}/>)
		}else{
			return(<Image style = {styles.icon} source = {require('../../images/nightModeS.png')}/>)
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

	async getLightSelection(){
		try {
	    	const value = await AsyncStorage.getItem('settings');
	    	response = JSON.parse(value);
	    	this.setState({light: response.lightMode})
		}catch(e) {
	    	this.setState({light: true})
	  	}
	}

	async changeMapStyle(){
		this.getLightSelection();
		let data = {
			lightMode: !this.state.light,
		}
		data = JSON.stringify(data);
		try {
		  await AsyncStorage.setItem('settings', data);
		  this.props.navigation.navigate('Loader');
		} catch (e) {
		    // saving error
		}
	}

	componentDidMount(){
		this.getLightSelection();
	}

	render(){
		return(
			<View style = {styles.container}>
				<NameForm />
				<View style = {styles.line} />
				<FuelForm />
				<View style = {styles.line} />
				<View style = {styles.nightMode}>
					<Text style = {styles.nightTitle}>Night Mode: </Text>
					<TouchableOpacity onPress = {() => this.changeMapStyle()}>
						{this.renderImage()}
					</TouchableOpacity>
				</View>
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
	},
	nightMode: {
		marginTop: 10,
		height: 40,
		flexDirection: 'row',
		backgroundColor: '#2D2D2D',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		padding: 15,
	},
	nightTitle: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#FFF'
	},
	icon: {
		maxHeight: 25,
		maxWidth: 25,
		marginLeft: 10,
	}
})