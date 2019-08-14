import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class FindButton extends Component{
	render(){
		return(
			<View style = {[styles.circle, styles.outterCircle]}>
				<View style = {[styles.circle, styles.innerCircle]}>
					<TouchableOpacity style = {styles.buttonContainer} onPress = {() => this.props.findGas()}>
						<Image 
						source = {require("../../images/gas.png")}
						style = {styles.image}
						/>
					</TouchableOpacity>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	circle: {
		borderRadius: 360,
		justifyContent: 'center',
		alignItems: 'center'
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

	}
})