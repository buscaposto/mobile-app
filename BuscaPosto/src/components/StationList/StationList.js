import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import TopBar from './TopBar';
import StationItem from './StationItem';

export default class StationList extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style = {styles.container}>
				<ScrollView >
					<TopBar 
					closeList = {()=> this.props.closeList()}
					selection = {this.props.selection}
					/>
					{this.props.gasStations.map((station, index) => (
						<StationItem
						  key = {index}
						  pos = {index}
						  userPos = {this.props.userPos}
						  info = {station}
						  likes = "133"
						  dislikes = "153"
						  favFuel = "G"
						  value = "4.15"
						  rtColor = "red"
					      />
						))}
				</ScrollView>
			</View>
		
		)
	}
}


const styles = StyleSheet.create({
	container:{
		height: '50%', 
		borderRadius: 4,
		borderWidth: 4,
		borderColor: '#1D1D1D',
		width: '100%', 
		backgroundColor: '#2D2D2D'
	},

})