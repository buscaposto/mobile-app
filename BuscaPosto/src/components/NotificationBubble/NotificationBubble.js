import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class NotificationBubble extends Component{
	state = {
		value: 0
	}
	async getSize(){
		try{
			const value = await AsyncStorage.getItem('history')
			var response = JSON.parse(value);
			var list = response.stations;
			var size = list.length;
			this.setState({value: size})
		}catch(e){
			this.setState({value: 0})
		}
	}
	
	componentDidMount(){
		this.getSize();
	}
	render(){
		if (this.state.value > 9){
			filteredValue = '9+'
		}else{
			filteredValue = this.state.value.toString()
		}
		return(
			<View>
				{(this.state.value > 0) && (
						<View style = {[styles.bubble, {backgroundColor: this.props.color}]}>
							<Text style = {styles.bubbleContent}>{filteredValue}</Text> 
						</View>
					)}
			</View>
			)
	}
}

const styles = StyleSheet.create({
	bubble: {
		borderRadius: 360,
		height: 18,
		width: 18,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bubbleContent: {
		fontWeight: 'bold',
		color: '#FFF',
		fontSize: 12
	}
})