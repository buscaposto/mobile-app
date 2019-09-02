import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import HistoryForm from './HistoryForm';

export default class History extends Component{
	render(){
		return(
			<View style = {styles.container}>
				<HistoryForm navigation = {this.props.navigation}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#202020'
	},
})