import React, {Component} from 'react';
import {
	View, 
	Text, 
	TouchableOpacity, 
	StyleSheet, 
} from 'react-native';

export default class NameForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			selected: 'g'
		}
	}

	selectFuel(selectedGas){
		this.setState({selected: selectedGas});
	}

	render(){
		return(
			<View style = {styles.container}>
				<Text style = {styles.title}>
					Select Your Default Fuel: {"\n"}
					(This will help when searching for gas stations)
				</Text>
				<View style = {styles.buttonsContainer}>
					<View style = {styles.buttonsRow}>
						<TouchableOpacity 
						onPress = {() => this.selectFuel('g')}
						style = {[styles.button, {marginRight: 10}, 
							this.state.selected == 'g'? 
							{backgroundColor: '#FFE600'} : {backgroundColor: '#2D2D2D'}]}
							>
							<Text style = {styles.buttonText}>Gasoline</Text>
						</TouchableOpacity>
						<TouchableOpacity
						onPress = {() => this.selectFuel('e')} 
						style = {[styles.button,
							this.state.selected == 'e'? 
							{backgroundColor: '#FFE600'} : {backgroundColor: '#2D2D2D'}]}
						>
							<Text style = {styles.buttonText}>Ethanol</Text>
						</TouchableOpacity>
					</View>
					<View style = {styles.buttonsRow}>
						<TouchableOpacity
						onPress = {() => this.selectFuel('ag')} 
						style = {[styles.button, {marginRight: 10}, 
							this.state.selected == 'ag'? 
							{backgroundColor: '#FFE600'} : {backgroundColor: '#2D2D2D'}]}
						>
							<Text style = {styles.buttonText}>Adt. Gasoline</Text>
						</TouchableOpacity>
						<TouchableOpacity
						onPress = {() => this.selectFuel('d')} 
						style = {[styles.button,
							this.state.selected == 'd'? 
							{backgroundColor: '#FFE600'} : {backgroundColor: '#2D2D2D'}]}
						>
							<Text style = {styles.buttonText}>Diesel</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container:{
		width: '100%',
		paddingHorizontal: 20,
	},
	title:{
		marginTop: 20,
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFF',
		marginBottom: 15,
	},
	buttonsContainer:{
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonsRow:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	button:{
		height: 50,
		width: '50%',
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