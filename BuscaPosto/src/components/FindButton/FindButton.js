import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class FindButton extends Component{
	constructor(props){
		super(props);
		this.state = {
			animate: false
		}
	}

	renderImage(){
		if (this.state.animate == false){
			return(
				<Image 
					source = {require("../../images/gas.png")}
					style = {styles.image}
				/>
				);
		}else{
			return(
				<Image 
					source = {require("../../images/icon.gif")}
					style = {styles.gif}
				/>
				)
		}
	}


	displaySearching(){
		this.setState({animate: true});
		this.props.findGas();
	}

	render(){
		return(
			<View style = {styles.container}>
				<View style = {[styles.circle, styles.outterCircle]}>
					<View style = {[styles.circle, styles.innerCircle]}>
						<TouchableOpacity 
							style = {styles.buttonContainer} 
							onPress = {() => this.displaySearching()}
						>
							{this.renderImage()}
						</TouchableOpacity>
					</View>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	circle: {
		borderRadius: 360,
		justifyContent: 'center',
		alignItems: 'center',
	},
	outterCircle: {
		backgroundColor: '#2D2D2D',
		height: 80,
		width: 80,
	},
	innerCircle: {
		backgroundColor: '#FFE600',
		height: 70,
		width: 70,
	},
	buttonContainer:{
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		maxHeight: 50,
		maxWidth: 50,
		marginLeft: '10%'
	},
	gif: {
		maxHeight: 100,
		maxWidth: 100,
	}
})