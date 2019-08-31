import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class TopBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			distance : this.props.selection == 'distance',
			money: this.props.selection == 'money'
		}
	}

	changeSelection(d_selected, m_selected){
		this.setState({
			distance: d_selected,
			money: m_selected
		});
	}
	render(){
		return(
			<View style = {styles.container}>
				<TouchableOpacity 
				style = {this.state.money ? styles.filterSelected : styles.filterButton}
				onPress = {() => this.changeSelection(false, true)}
				>
					<Image 
					style = {styles.icon} 
					source = {require('../../images/money.png')}/>
				</TouchableOpacity>
				<TouchableOpacity 
				style = {this.state.distance ? styles.filterSelected : styles.filterButton}
				onPress = {() => this.changeSelection(true, false)}
				>
					<Image 
					style = {styles.icon} 
					source = {require('../../images/distance.png')}/>
				</TouchableOpacity>
				<TouchableOpacity 
				style = {styles.closeButton}
				onPress = {() => this.props.closeList()}
				>
					<Image 
					style = {styles.icon} 
					source = {require('../../images/closeButton.png')}/>
				</TouchableOpacity>
			</View>
		
		)
	}
}


const styles = StyleSheet.create({
	container:{
		height: 70,
		padding: 10,
		justifyContent: 'flex-end',
		flexDirection: 'row',
		borderBottomWidth: 5,
		borderColor: '#5D5D5D'
	},
	icon:{
		maxHeight: 30,
		maxWidth: 30,
	},
	filterButton:{
		height: 40,
		width: 40,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#1D1D1D',
		marginRight: 10,
	},
	filterSelected: {
		height: 40,
		width: 40,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#32A852',
		marginRight: 10,
	},
	closeButton: {
		height: 40,
		width: 40,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A83232'
	}



})