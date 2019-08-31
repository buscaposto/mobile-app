import React, {Component} from 'react';
import {
	View, 
	Text, 
	TouchableOpacity, 
	TextInput, 
	StyleSheet, 
	Image, 
	Dimensions,
	Modal
} from 'react-native';

const missionWidth = Dimensions.get('window').width * 0.9;
const missionHeight = Dimensions.get('window').height * 0.1;
const spaceHorizontal = Dimensions.get('window').width * 0.05;
const spaceVertical = Dimensions.get('window').height * 0.4;

export default class NameForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			modalVisible: false,
			nameInput: 'Place Holder',
			nameDisplayed: 'Place Holder'
		}
	}


	saveChanges(){
		this.setState({
			nameDisplayed: this.state.nameInput, 
			modalVisible: !this.state.modalVisible
		})
	}
	render(){
		return(
			<View>
				<TouchableOpacity 
				style = {styles.nameContainer}
				onPress = {()=> this.setState({modalVisible:!this.state.modalVisible})}
				>
					<Text style = {styles.name}>{this.state.nameDisplayed}</Text>
					<Image style = {styles.editIcon} source = {require('../../images/edit.png')} />
				</TouchableOpacity>
				<Modal
		          animationType="slide"
		          transparent={true}
		          visible={this.state.modalVisible}
		        >
		        	<View style = {styles.modalContainer}>
		        		<TextInput 
			            style = {styles.input}
			            autoCorrect = {false}
			            onChangeText = {(text) => this.setState({nameInput: text})}
			            value = {this.state.nameInput}
			            keyboardType = 'default'
			            />
			            <TouchableOpacity style = {styles.saveButton} onPress = {()=>this.saveChanges()}>
			            	<Text style = {styles.textButton}>OK</Text>
			            </TouchableOpacity>
		        	</View>
		        </Modal>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	nameContainer:{
		height: 50,
		width: '40%',
		padding: 10,
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'center',
	},
	name: {
		fontWeight: 'bold',
		color: '#FFFFFF',
		fontSize: 18
	},
	editIcon:{
		marginLeft: 10,
		maxHeight: 20,
		maxWidth: 20
	},
	modalContainer:{
		backgroundColor: '#1D1D1D',
		padding: 10,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	    height: missionHeight,
	    width: missionWidth,
	    marginTop: spaceVertical,
	    marginLeft: spaceHorizontal
	},
	input: {
		width: '85%',
		color: '#FFF',
		fontSize: 18,
		fontWeight: 'bold',
		borderBottomWidth: 2,
		borderBottomColor:'#5D5D5D' 
	},
	saveButton:{
		maxHeight: 50,
		width: '15%',
		backgroundColor: '#FFE600',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textButton:{
		fontSize: 18,
		fontWeight: 'bold',
		color: '#000'
	}
})