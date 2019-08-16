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
        this.state = {
        	searching: false,
        }
    }

    // making a function that switchs which components appears in the home screen
    // IF it is searching for a station the station list, if not, the find button
    setHomeComponents(){
    	if (this.state.searching == true){
    		return(
    			<View 
    			style = {{height: '50%', borderRadius: 5, width: '100%', backgroundColor: '#2D2D2D'}}
    			onPress = {() => this.setState({searching:false})}
    			>
    				<Text style = {{fontSize: 32, color: '#FFF'}}>HELLOOOOO</Text>
    			</View>
    			)
    	}else{
    		return(
    				<FindButton 
			    	navigation = {this.props.navigation} 
			    	findGas = {() => 
			    		this.setState({searching: true})}
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

    // this function hiding the splashscreen right after the component is ready.
    componentDidMount(){
    	SplashScreen.hide();
    }

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