import React, {Component} from 'react';
import {
	Alert,
	View, 
	ImageBackground, 
	StyleSheet, 
	TouchableOpacity,
	Text,
	Image, 	
} from 'react-native';
import MapView from 'react-native-maps';
import NotificationBubble from '../NotificationBubble/NotificationBubble';
import FindButton from '../FindButton/FindButton';
import StationList from '../StationList/StationList';
import Geolocation from '@react-native-community/geolocation';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
        	searching: false,
        	gasStations: [],
        	region: {latitude: -15, longitude: -47, latitudeDelta: 0.1022, longitudeDelta:0.0521,},
        	filter: 'distance'
        }
    }

    //Using component did mount to get the user position during component creatio/loading;
	componentDidMount(){
		let geoOpition = {
			timeOut: 10000,
		}
		Geolocation.getCurrentPosition(this.geoSucess, this.geoFailure, geoOpition)
		// This function needs 3 parameters:
		// 1 - A function to execute if the requisiton is successfull;
		// 2 - A function to execute if the requisition fails;
		// 3 - Requisition Options, which we already defined.
	}

	//If the requisition fails we notify the user that his connection isn't good enough
	geoFailure = (err) => {
		console.log(err);		
	}

	// When the requisition is successfull the values are saved in local variables and then
	// inserted in the state.
	geoSucess = (position) => {
		let lat = position.coords.latitude;
		let lng = position.coords.longitude;
		this.setState({
			region: {
				latitude: lat, 
				longitude: lng, 
				latitudeDelta: 0.0922, 
				longitudeDelta:0.0421,
			}
		})
	}

	checkCapable(data, processedData){

	    if (processedData.length == 0){
	        return true
	    }else if (data == null){
	        return false
	    }else{ // This means we need to check if the data is near

	 		
	        for (let i = 0; i < processedData.length; i ++){
	            if (Math.abs(Math.abs(data.latitude) - Math.abs(processedData[i].latitude)) <= 0.001 && Math.abs(Math.abs(data.longitude) - Math.abs(processedData[i].longitude)) <= 0.001){
	                return false;
	            }
	        }
	        return true;
	    }
	}

	filterRawData(rawData, processedData){

	    for (let i = 0; i < rawData.length; i++){
	        
	        if (this.checkCapable(rawData[i], processedData)){
	            processedData.push(rawData[i])
	        }
	    }

	    return processedData;
	};

    //Reduces the size of the list, since we cant get up to 20 positions but not all of them will be used. 
    reduceList(list, size){
		
		//Filtering repeated locations
		while(list.length > size){
			list.pop()
		}
		return list;
	}

	// Function utilized at the map function after the rest requisition, it filters what informations
	// We are going to use for the app.
	filterStationInfo(station){
		var info = {
			latitude: station.geometry.location.lat,
			longitude: station.geometry.location.lng,
			name: station.name
		};
			return info;
	}

	// Some station's name are way too big so we need to reduce it.
    reduceStationName(station){
		if (station.name.length > 25){
			station.name = station.name.slice(0, 22);
			station.name += "...";
		}
		return station
	}

	//FUNCTION THAT UTILIZES AND FILTER WEB SERVICE REQUEST.
    async searchGasStations(){

    	let geoOpition = {
			timeOut: 10000,
		}
    	Geolocation.getCurrentPosition(this.geoSucess, this.geoFailure, geoOpition);
		
    	// Fetch requisiting gas station list from google places REST API.
		let response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.region.latitude},${this.state.region.longitude}&rankby=distance&type=gas_station&key=API KEY`)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({gasStations: []});
			let info = responseJson.results.map((value) => this.filterStationInfo(value));
			info = this.reduceList(info, 10);
			info = info.map(this.reduceStationName);
			info = this.filterRawData(info, this.state.gasStations)
			this.setState({
				gasStations: info,
			 	searching: true
			});
			console.log(info);
		})
		.catch((error) => {
			Alert.alert("Título", error.toString());
		});
	}

    // making a function that switchs which components appears in the home screen
    // IF it is searching for a station the station list, if not, the find button
    setHomeComponents(){
    	if (this.state.searching == true){
    		return(
    			<StationList
    			selection = {this.state.filter}
    			gasStations = {this.state.gasStations}
    			userPos = {this.state.region}
    			closeList = {() => 
    				this.setState({searching: false, gasStations: []})}
    			/>
    			)
    	}else{
    		return(
    				<FindButton 
			    	navigation = {this.props.navigation} 
			    	findGas = {() => 
			    		this.searchGasStations()}
			    	/>
    			)
    	}
    }

    // setting the navigation options, like title and some buttons
    // the station form and user settings button are created here.
    static navigationOptions = ({navigation}) => ({
			title: 'HOME',
			headerRight: (
				<TouchableOpacity 
				onPress = {() => navigation.navigate('Login')}
				style = {{marginRight: 20}}
				>
					<ImageBackground 
					style = {{height: 35, width: 35, alignItems: 'flex-end'}}
					source = {require('../../images/history.png')}
					>
						<NotificationBubble 
						color = "#D92000"
						value = {2}
						/>
					</ImageBackground> 
				</TouchableOpacity>
				),
			headerLeft: (
				<TouchableOpacity 
				onPress = {() => navigation.navigate('UserSettings')}
				style = {{marginLeft: 10}}
				>
					<Image 
					style = {{maxHeight: 25, maxWidth: 25}}
					source = {require('../../images/userSettings.png')}
					/> 
				</TouchableOpacity>
				) 
		})

	render(){
		return(
			    <View style = {styles.container}>
			    	 <MapView
			    	 	style = {styles.map}
					    initialRegion = {this.state.region}
					  >
					  	{this.state.gasStations.map((station, index) => (
						<MapView.Marker 
						  key = {index}
					      coordinate={{latitude: station.latitude, longitude: station.longitude}}
					      title={station.name}/>
						))}
					  </MapView>
			    	{this.setHomeComponents()}
				</View>
			);
	}
	
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		paddingHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	map: {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: -25,
	},
})