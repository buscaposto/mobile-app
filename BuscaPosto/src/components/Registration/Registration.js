import React, {Component} from 'react';
import {
	View, 
	KeyboardAvoidingView,
	Text, 
	ImageBackground, 
	StyleSheet, 
	Image, 
	Dimensions
} from 'react-native';
import RegistrationForm from './RegistrationForm';

export default class Registration extends Component{
    constructor(props){
        super(props)
        this.state = {
            verticalMargin: Dimensions.get('window').height * 0.10,
            imageDistance: Dimensions.get('window').height * 0.05
        }
    }
	render(){
		return(
			<View style = {styles.container}>
				<ImageBackground style={styles.bg} source = {require('../../images/background.png')}>				
					<KeyboardAvoidingView behavior = 'height' style = {[styles.formContainer, {marginTop: this.state.verticalMargin}]}>
	                        <Image 
	                        style = {[styles.myImage, {marginBottom: this.state.imageDistance}]} 
	                        source = {require('../../images/logo.png')} 
	                        />
	                        <RegistrationForm navigation = {this.props.navigation}/>
					</KeyboardAvoidingView>
				</ImageBackground>
			</View>

			);
	}
	
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
	},
	bg: {
		height: '100%',
		width: '100%'
	},
	myImage: {
		height: 100,
		width: 300
	},
	formContainer: {
		padding: 10,
		justifyContent: 'flex-end',
		alignItems: 'center',
	}
})