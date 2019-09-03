import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HistoryItem from './HistoryItem';
import AsyncStorage from '@react-native-community/async-storage';


export default class HistoryForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			history: {
				stations: []
			}
		}
	}
	async getStations(){
		try{
			const value = await AsyncStorage.getItem('history')
			var response = JSON.parse(value);
			this.setState({history: response})
		}catch(e){
			console.log(e);
		}
	}
	componentDidMount(){
		this.getStations();
	}
	render(){
		return(
			<View style = {styles.container}>
				{this.state.history.stations.map((station, index) => (
					<HistoryItem
					  key = {index}
					  navigation = {this.props.navigation}
					  name = {station.name}
					  latitude = {station.latitude}
					  longitude = {station.longitude}
					  like = "1209"
					  dislike = "323"
					  defaultFuel = "G"
					  fuelPrice = "4.324"
				      />
				))}
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