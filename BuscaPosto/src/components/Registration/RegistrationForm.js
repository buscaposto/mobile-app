import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


export default class RegistrationForm extends Component{
	constructor(){
		super()
		this.state = {
			validationText: "",
			email: "",
			name: "",
			pass: "",
		}
	}

	makeRegister(){
		
		let letterNumber = /^[0-9a-zA-Z]+$/;

		// Validating the user registration, first checking if he didnt insert a required value

		if (this.state.email == "" || this.state.name == "" || this.state.pass == "" ){
			this.setState({validationText: "One or more fields not filled."});
		}
		else if (!this.state.name.match(letterNumber)){
			this.setState({validationText: "Username can't have symbols."});
		}
		else if (this.state.name.length < 4 || this.state.name.length > 20){
			this.setState({validationText: "Username must be at least 4 and maximum 20 characters."});
		}
		else if (this.state.pass.length < 8 || this.state.pass.length > 22){
			this.setState({validationText: "Password must be at least 8 and maximum 22 characters."});
		}
		else if (!this.state.email.includes(".com") || !this.state.email.includes("@")){
			this.setState({validationText: "This is not a valid email."});
		}
		else if (this.state.name.includes(' ')){
			this.setState({validationText: "Username can't contain a blank space."});
		}
		else if (this.state.email.includes(' ')){
			this.setState({validationText: "Email can't contain a blank space."});
		}
		else if (this.state.pass.includes(' ')){
			this.setState({validationText: "Password can't contain a blank space."});
		}else{
			this.setState({validationText: "Registred Successfully."});
		}

    }
	render(){
		return(
			<View style = {styles.container}>
				<View>
					<TextInput 
					style = {styles.input}
					placeholder = 'E-mail'
					placeholderTextColor = 'rgba(255, 229, 0, 0.5)'
					autoCorrect = {false}
					onChangeText = {(text) => this.setState({email: text})}
					autoCapitalize = 'none'
					keyboardType = 'email-address'
					/>
					<TextInput 
					style = {styles.input}
					placeholder = 'Username'
					placeholderTextColor = 'rgba(255, 229, 0, 0.5)'
					autoCorrect = {false}
					onChangeText = {(text) => this.setState({name: text})}
					autoCapitalize = 'none'
					/>
					<TextInput 
					style = {styles.input}
					placeholder = 'Password'
					placeholderTextColor = 'rgba(255, 229, 0, 0.5)'
					autoCorrect = {false}
					onChangeText = {(text) => this.setState({pass: text})}
					autoCapitalize = 'none'
					secureTextEntry = {true}
					/>
					<View style = {styles.errorContainer}>
						<Text style = {styles.errorText}>{this.state.validationText}</Text>
					</View>
					<View>
						<TouchableOpacity style = {styles.button} onPress = {() => this.makeRegister()}>
							<Text style = {styles.buttonText}>REGISTER</Text>
						</TouchableOpacity>
						<TouchableOpacity style = {{height: 45}} onPress = {() => this.props.navigation.navigate('Login')}>
							<Text style = {styles.link}>Have an account already?</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 10,
	},
	input: {
		height: 45,
		marginBottom: 20,
		borderRadius: 5,
		fontSize: 16,
		backgroundColor: 'rgba(51, 51, 51, 0.7)',
		alignSelf: 'stretch',
		paddingHorizontal: 10,
		color: 'rgba(255, 229, 0, 0.7)'
	},
	errorContainer: {
		marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	errorText: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#d80f0f'
	},
	button: {
		height: 40,
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
})