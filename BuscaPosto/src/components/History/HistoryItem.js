import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

export default class HistoryItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			station: {
				name: this.props.name,
				like: this.props.like,
				dislike: this.props.dislike,
				defaultFuel: this.props.defaultFuel,
				fuelPrice: this.props.fuelPrice
			}
		};
	}
	render(){
		return(
			<TouchableOpacity 
			style = {styles.container}
			onPress = {() => this.props.navigation.navigate('StationScreen', 
				{station: this.state.station, name: this.state.station.name})}
			>
				<Text style = {styles.name}>{this.props.name}</Text>
				<View style = {styles.division}/>
				<View style = {styles.rating}>
					<Image 
					source = {require('../../images/likeH.png')} 
					style = {styles.icon}
					/>
					<Text style = {styles.ratingValue}> {this.props.like} </Text>
				</View>
				<View style = {styles.rating}>
					<Image 
					source = {require('../../images/dislikeH.png')} 
					style = {styles.icon}
					/>
					<Text style = {styles.ratingValue}> {this.props.dislike} </Text>
				</View>
				<View style = {styles.division}/>
				<Text style = {styles.price}> {this.props.defaultFuel}: {this.props.fuelPrice} </Text>
			</TouchableOpacity>	
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: 70,
		width: '100%',
		borderRadius: 25,
		padding: 10,
		marginBottom: 20,
		backgroundColor: '#3D3D3D',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	name: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#FFF'
	},
	division: {
		height: '100%',
		width: 2,
		backgroundColor: '#777',
		marginRight: 5,
		marginLeft: 5
	},
	rating: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon:{
		maxHeight: 20,
		maxWidth: 20,
		marginRight: 5
	},
	ratingValue:{
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFF'
	},
	price: {
		height: '90%',
		padding: 10,
		borderRadius: 20,
		backgroundColor: '#555',
		fontWeight: 'bold',
		color: '#FFF',
		fontSize: 16,
	}

})