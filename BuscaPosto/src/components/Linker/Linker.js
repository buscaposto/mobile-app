import React, {Component} from 'react';
import { 
	createSwitchNavigator, 
	createAppContainer, 
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import Loader from '../Loader/Loader';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Registration from '../Registration/Registration';
import UserSettings from '../UserSettings/UserSettings';
import History from '../History/History';



const StackNavigator = createStackNavigator({
	Home: {
		screen: Home,
	},
	History: {
		screen: History,
		navigationOptions: () => ({title: 'VISITED STATIONS'})
	},
	UserSettings: {
		screen: UserSettings,
		navigationOptions: () => ({title: 'USER SETTINGS'})
	}
},
{
	initialRouteName: 'Home',
	headerLayoutPreset: 'center',
	defaultNavigationOptions:{
	  headerStyle: {
	    backgroundColor: '#2D2D2D',
	  },
      headerTintColor: '#FFF',
      headerTitleStyle:{
      	fontWeight: 'bold',
      	fontSize: 16,
      	textAlign: 'center',
      	color: '#FFFFFF'
      },
	}
});

const SwitchNavigator = createSwitchNavigator({

	Login: Login,
	Registration: Registration,
	Loader: Loader,
	Stack: StackNavigator
},
{
	initialRouteName: 'Loader'
});

export default createAppContainer(SwitchNavigator);

