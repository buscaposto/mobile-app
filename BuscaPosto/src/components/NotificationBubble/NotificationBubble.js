import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NotificationBubble extends Component{
	render(){
		if (this.props.value > 9){
			filteredValue = '9+'
		}else{
			filteredValue = this.props.value.toString()
		}
		return(
			<View>
				{(this.props.value > 0) && (
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