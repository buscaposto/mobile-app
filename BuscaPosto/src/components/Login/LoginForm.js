import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

export default class LoginForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
			pass: "",
			validationText: "",
			authorized: false,
		};
	}

	makeLogin(){

		if (this.state.email == "" && this.state.pass == ""){
		    this.setState({validationText: "None of the fields were filled."});
		}

		else if (this.state.email == ""){
			this.setState({validationText: "Email is a required field."});
		}

		else if (this.state.pass == ""){
        	this.setState({validationText: "Password is a required field."});
		}

        else {
          	this.props.navigation.navigate('Stack');
		}
	}

	render(){
		return(
			<View style = {styles.container}>
				<TextInput 
				style = {styles.input}
				placeholder = 'E-mail'
				placeholderTextColor = 'rgba(255, 229, 0, 0.5)'
				onChangeText = {(text) => this.setState({email: text})}
				autoCorrect = {false}
				autoCapitalize = 'none'
				keyboardType = 'email-address'
				/>
				<TextInput
				style = {styles.input}
				placeholder = 'Password'
				placeholderTextColor = 'rgba(255, 229, 0, 0.5)'
				onChangeText = {(text) => this.setState({pass: text})}
				autoCorrect = {false}
				autoCapitalize = 'none'
				secureTextEntry = {true}
				/>
				<TouchableOpacity style = {styles.button} onPress = {() => this.makeLogin()}>
					<Text style = {styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress = {() => this.props.navigation.navigate('Registration')}>
					<Text style = {styles.link}>Don't have an account?</Text>
				</TouchableOpacity>
				<View style = {styles.errorContainer}>
					<Text style = {styles.errorText}>{this.state.validationText}</Text>
				</View>
			</View>

			);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		width: '100%',
	},
	input: {
		height: 45,
		marginBottom: 10,
		borderRadius: 5,
		fontSize: 16,
		backgroundColor: 'rgba(51, 51, 51, 0.7)',
		alignSelf: 'stretch',
		paddingHorizontal: 10,
		color: 'rgba(255, 229, 0, 0.7)'
	},
	button: {
		height: 45,
		backgroundColor: 'rgba(255, 229, 0, 1)',
		marginTop: 10,
		borderRadius: 5,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',

	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	link: {
		color: 'rgba(255, 229, 0, 1)',
		marginTop: 15,
		fontSize: 16,
		textAlign: 'center',
	},
	errorContainer: {
		marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	errorText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#d80f0f'
	}
})