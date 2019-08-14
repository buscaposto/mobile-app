import React, {Component} from 'react';
import {
	View, 
	ImageBackground, 
	StyleSheet, 
	TouchableOpacity,
	Text,
	Image, 	
} from 'react-native';
import MapView from 'react-native-maps';
import SplashScreen from 'react-native-splash-screen';

import NotificationBubble from '../NotificationBubble/NotificationBubble';
import FindButton from '../FindButton/FindButton'


export default class Home extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    	SplashScreen.hide();
    }

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
					    initialRegion={{
					      latitude: -15.78825,
					      longitude: -47.4324,
					      latitudeDelta: 0.0922,
					      longitudeDelta: 0.0421,
					    }}
					  />
			    	<FindButton navigation = {this.props.navigation} findGas = {() => this.props.navigation.setParams({headerMode: 'none'})}/>
				</View>
			);
	}
	
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		padding: 10,
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