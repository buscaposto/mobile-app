import React, {Component} from 'react';
import {
	View, 
	Text, 
	TouchableOpacity, 
	StyleSheet, 
	Dimensions,
} from 'react-native';

containerHorizontal = Dimensions.get('window').width * 0.90

export default class NameForm extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}

	render(){
		return(
			<View style = {styles.container}>
				<Text style = {styles.title}>
					Select Your Favourite Fuel: {"\n"}
					(This will help when searching for gas stations)
				</Text>
				<View style = {styles.buttonsContainer}>
					<View style = {styles.buttonsRow}>
						<TouchableOpacity style = {styles.button}>
							<Text style = {styles.buttonText}>Alchohol</Text>
						</TouchableOpacity>
						<TouchableOpacity style = {styles.button}>
							<Text style = {styles.buttonText}>Gasoline</Text>
						</TouchableOpacity>
						<TouchableOpacity style = {styles.button}>
							<Text style = {styles.buttonText}>A. Gasoline</Text>
						</TouchableOpacity>
					</View>
					<View style = {styles.buttonsRow}>
						<TouchableOpacity style = {styles.button}>
							<Text style = {styles.buttonText}>P. Gasoline</Text>
						</TouchableOpacity>
						<TouchableOpacity style = {styles.button}>
							<Text style = {styles.buttonText}>Diesel</Text>
						</TouchableOpacity>
						<TouchableOpacity style = {styles.button}>
							<Text style = {styles.buttonText}>Diesel S10</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container:{
		width: containerHorizontal,
	},
	title:{
		marginTop: 20,
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFF'
	},
	buttonsContainer:{
		padding: 10,
	},
	buttonsRow:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	button:{
		marginLeft: 10,
		backgroundColor: '#2D2D2D',
		height: 50,
		width: '25%',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText:{
		fontSize: 14,
		fontWeight: 'bold',
		color: '#FFF',

	}
})