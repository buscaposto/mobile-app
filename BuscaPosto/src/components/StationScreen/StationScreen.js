import React, {Component} from 'react';
import {
	View,
	Image, 
	TextInput, 
	TouchableOpacity, 
	Text,
	Dimensions, 
	StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const boxHeight = Dimensions.get('window').height * 0.2;
const bottomLength = Dimensions.get('window').width;

export default class StationScreen extends Component{
	constructor(props){
		super(props);
		this.state = {
			station: this.props.navigation.getParam('station', 'failed'),
			gasPrice: '3.22',
			likeSelected: false,
			dislikeSelected: false
		}
	}

	getStationIndex(value, list){
		for (let i = 0; i < list.length; i++){
			if (list[i].latitude == value){
				return i;
			}
		}
		return -1;
	}
	async deleteStation(){		
		try {
		  const value = await AsyncStorage.getItem("history");
		  history = JSON.parse(value);

		  stationIndex = this.getStationIndex(this.state.station.latitude, history.stations);
		  if(stationIndex >= 0){
		  	history.stations.splice(stationIndex, 1);
		  }
		  const data = JSON.stringify(history);
		  await AsyncStorage.setItem("history", data);
		  this.props.navigation.navigate('Loader');
		} catch (e) {
		    console.log(e)
		}
	}

	basshunter(like, dislike){
		this.setState({likeSelected: like, dislikeSelected: dislike});
	}

	static navigationOptions = ({navigation}) => ({
			title: navigation.getParam('name', 'failed'),
		})

	render(){
		return(
			<View style = {styles.container}>
				<View style = {styles.row}>
					<View style = {styles.box}>
						<Text style = {styles.fuelTitle}>GASOLINE</Text>
						<TextInput 
						style = {styles.input}
						onChangeText = {(text) => this.setState({gasPrice: text})}
						autoCorrect = {false}
						value = {this.state.gasPrice}
						autoCapitalize = 'none'
						keyboardType = 'numeric'
						/>
					</View>
					<View style = {styles.box}>
						<Text style = {styles.fuelTitle}>ADT. GASOLINE</Text>
						<TextInput 
						style = {styles.input}
						onChangeText = {(text) => this.setState({gasPrice: text})}
						autoCorrect = {false}
						value = {this.state.gasPrice}
						autoCapitalize = 'none'
						keyboardType = 'numeric'
						/>
					</View>
				</View>
				<View style = {styles.row}>  
					<View style = {styles.box}>
						<Text style = {styles.fuelTitle}>ETHANOL</Text>
						<TextInput 
						style = {styles.input}
						onChangeText = {(text) => this.setState({gasPrice: text})}
						autoCorrect = {false}
						value = {this.state.gasPrice}
						autoCapitalize = 'none'
						keyboardType = 'numeric'
						/>
					</View>
					<View style = {styles.box}>
						<Text style = {styles.fuelTitle}>DIESEL</Text>
						<TextInput 
						style = {styles.input}
						onChangeText = {(text) => this.setState({gasPrice: text})}
						autoCorrect = {false}
						value = {this.state.gasPrice}
						autoCapitalize = 'none'
						keyboardType = 'numeric'
						/>
					</View>
				</View>
				<View style = {[styles.row, {marginTop: 20}]}>
					<TouchableOpacity 
					style = {[styles.ratingButton, {borderColor: '#5CC225'}, this.state.likeSelected ? {backgroundColor: '#5CC225'}: {backgroundColor: '#2D2D2D'}]}
					onPress = {()=> this.basshunter(!this.state.likeSelected, false)}
					>
						<Image 
						source = {require('../../images/like.png')} 
						style = {styles.icon}
						/> 
						<Text style = {styles.rating}> {this.state.station.like}</Text>
					</TouchableOpacity>
					<TouchableOpacity 
					style = {[styles.ratingButton, {borderColor: '#A83232'}, this.state.dislikeSelected ? {backgroundColor: '#A83232'}: {backgroundColor: '#2D2D2D'}]}
					onPress = {()=> this.basshunter(false, !this.state.dislikeSelected)}
					>
						<Image 
						source = {require('../../images/dislike.png')} 
						style = {styles.icon}
						/>
						<Text style = {styles.rating}> {this.state.station.dislike}</Text> 
					</TouchableOpacity>
				</View>
				<View style = {styles.bottomView}>
					<TouchableOpacity 
					style = {styles.confirmButton}
					onPress = {() => this.deleteStation()}
					>
						<Text style = {styles.textButton}> CONFIRM </Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		padding: 10,
		alignItems: 'flex-start',
		backgroundColor: '#2D2D2D'
	},
	row: {
		flexDirection: 'row',
		marginBottom: 15,
	},
	box: {
		flex: 1,
		height: boxHeight,
		marginRight: 10,
		borderRadius: 15,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#1D1D1D'
	},
	input: {
		width: '100%',
		borderColor: '#2D2D2D',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		borderBottomWidth: 5,
		color: '#FFF',
		fontSize: 20
	},
	fuelTitle:{
		fontSize: 20,
		fontWeight: 'bold', 
		color: '#FFE600'
	},
	rating: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#FFF'
	},
	ratingButton:{
		flex: 1,
		height: 40,
		flexDirection: 'row',
		marginRight: 5,
		borderRadius: 15,
		borderWidth: 3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon:{
		maxHeight: 25,
		maxWidth: 25,
		marginRight: 20,
	},
	bottomView:{
		width: bottomLength, 
		position: 'absolute', 
		bottom: 0
	},
	confirmButton:{
		alignSelf: 'stretch',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFE600',
		borderRadius: 5,
	},
	textButton:{
		fontWeight: 'bold',
		fontSize: 18,
		color: '#000000'
	}
})