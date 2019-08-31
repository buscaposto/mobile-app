import React, {Component} from 'react';
import {
	View, 
	KeyboardAvoidingView,
	ImageBackground, 
	StyleSheet, 
	Image, 
	Dimensions	
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            verticalMargin: Dimensions.get('window').height * 0.15,
            imageDistance: Dimensions.get('window').height * 0.05
        };
    }
	render(){
		return(
			    <View style = {styles.container}>
			    	<ImageBackground style={styles.bg} resizeMode = 'cover' source = {require('../../images/background.png')}>
				    	<KeyboardAvoidingView behavior = 'height' style = {[styles.formContainer, {marginTop: this.state.verticalMargin}]}>
		                    <Image 
		                    style = {[ styles.myImage,{marginBottom: this.state.imageDistance}]} 
		                    source = {require('../../images/logo.png')} 
		                    />
		                    <LoginForm navigation = {this.props.navigation}/>
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
	bg:{
		width: '100%',
		height: '100%'
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