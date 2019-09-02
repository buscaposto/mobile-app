import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HistoryItem from './HistoryItem';

export default class HistoryForm extends Component{
	render(){
		return(
			<View style = {styles.container}>
				<HistoryItem 
				navigation = {this.props.navigation}
				name = "Posto Ipiranga"
				like = "1209"
				dislike = "323"
				defaultFuel = "G"
				fuelPrice = "4.324"
				/>
				<HistoryItem
				navigation = {this.props.navigation} 
				name = "Posto Tigrão"
				like = "629"
				dislike = "115"
				defaultFuel = "G"
				fuelPrice = "4.311"
				/>
				<HistoryItem
				navigation = {this.props.navigation} 
				name = "Posto Shell Via"
				like = "1031"
				dislike = "443"
				defaultFuel = "G"
				fuelPrice = "4.525"
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		padding: 10,
		backgroundColor: '#202020'
	},
})