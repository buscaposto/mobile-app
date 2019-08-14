import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";

import Login from '../Login/Login';
import Home from '../Home/Home';
import Registration from '../Registration/Registration';
import UserSettings from '../UserSettings/UserSettings';



const StackNavigator = createStackNavigator({
	Home: {
		screen: Home,
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
	Stack: StackNavigator
},
{
	initialRouteName: 'Stack'
});

export default createAppContainer(SwitchNavigator);

