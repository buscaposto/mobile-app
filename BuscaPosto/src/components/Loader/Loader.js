import React, {Component} from 'react';
import {
	Alert,
	View,
	Image,
	StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class Loader extends Component{
	constructor(props){
		super(props);
		this.state = {
			timePassed: false,
		}
	}

	setRoute = async () => {
	  try {
	    const value = await AsyncStorage.getItem('logged');
	    response = JSON.parse(value);

	    if(response.authorized == true) {
	      this.props.navigation.navigate('Stack', {size: 4});
	    
	    }else{
	      this.props.navigation.navigate('Login');

	    }
	  } catch(e) {
	    this.props.navigation.navigate('Login');
	  }
	}

	componentDidMount(){
		setTimeout(() => {this.setRoute()}, 1000)
			
	}
	
	render(){
		return(
			<View style = {styles.container}>
				<Image 
				style = {styles.logo}
				source = {require('../../images/gas.png')} 
				/>
			</View>

		
		)
	}
}

const styles = StyleSheet.create({
	container:{
		height: '100%',
		backgroundColor: '#FFE600',
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo:{
		maxHeight: 100,
		maxWidth: 100
	}

});