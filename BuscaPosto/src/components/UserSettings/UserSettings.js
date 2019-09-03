import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import UserForm from './UserForm';
import ImagePicker from 'react-native-image-picker';

export default class UserSettings extends Component{
	state = {
		photo: null,
	}

	handlePhoto = () => {
		const options = {
			noData: true,
		};
		ImagePicker.launchImageLibrary(options, response =>{
			if(response.uri){
				this.setState({photo: response})
			}
		});
	};
	render(){
		return(
			<View style = {styles.container}>
				<TouchableOpacity 
				style = {styles.avatarContainer}
				onPress = {()=> this.handlePhoto()}
				>
					{this.state.photo && (
						<Image style = {styles.avatarImage} source = {{uri: this.state.photo.uri}}/>
						)}
				</TouchableOpacity>
				<UserForm navigation = {this.props.navigation}/>
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
		marginBottom: 10,
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