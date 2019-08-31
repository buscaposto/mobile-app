import React, {Component} from 'react';
import {
	View, 
	Text, 
	TouchableOpacity, 
	StyleSheet, 
	Dimensions,
	Image,
	Linking
} from 'react-native';


// Making a modal 40% height and 90% width
modalHeight = "35%";
modalWidth = "90%";

// Distancing the modal so it'll appear at the center of the window.
// (0.4 - 1)/2 = 0.3, (0.9 - 1)/2 = 0.05
modalDistanceVertical = Dimensions.get('window').height * 0.325;
modalDistanceHorizontal = modalWidth = Dimensions.get('window').width * 0.05;

export default class StationModal extends Component{
	constructor(props){
		super(props);
		this.url = `https://www.google.com/maps/dir/?api=1&origin=${this.props.userPos.latitude},${this.props.userPos.longitude}&destination=${this.props.info.latitude},${this.props.info.longitude}&travelmode=driving`

	}

	render(){
		return(
			<View style = {styles.container}>
				<View style = {styles.topContentContainer}>
					<Text style = {styles.title}>{this.props.info.name}</Text>
					<TouchableOpacity 
						style = {styles.closeButton}
						onPress = {()=> this.props.closeModal()}
					>
						<Image 
							style = {styles.icon} 
							source = {require('../../images/closeButton.png')}
						/>
					</TouchableOpacity>
				</View>
				<View style = {styles.centerContentContainer}>
					<View style = {styles.row}>
						<View style = {styles.priceContainer}>
							<Text style = {styles.fuelTag}>G :</Text>
							<Text style = {styles.price}>4.327</Text>
						</View>
						<View style = {styles.priceContainer}>
							<Text style = {styles.fuelTag}>AG :</Text>
							<Text style = {styles.price}>4.567</Text>
						</View>
					</View>
					<View style = {styles.row}>
						<View style = {styles.priceContainer}>
							<Text style = {styles.fuelTag}>D :</Text>
							<Text style = {styles.price}>3.225</Text>
						</View>
						<View style = {styles.priceContainer}>
							<Text style = {styles.fuelTag}>A :</Text>
							<Text style = {styles.price}>3.983</Text>
						</View>
					</View>

				</View>
				<View style = {styles.bottomContentContainer}>
					<TouchableOpacity 
						style = {styles.goButton}
						onPress = {()=> Linking.openURL(this.url)}
					>
						<Text style = {{fontWeight: 'bold', fontSize: 16, color: '#000'}}> GO! </Text>
					</TouchableOpacity>
				</View>
			</View>
		
		)
	}
}


const styles = StyleSheet.create({
	container:{
		height: modalHeight,  
		width: '90%', 
		backgroundColor: '#212121',
		marginTop: modalDistanceVertical,
		marginLeft: modalDistanceHorizontal,
		borderRadius: 5,
	},
	topContentContainer:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		borderColor: '#5D5D5D',
		borderBottomWidth: 2
	},
	centerContentContainer:{
		paddingVertical: 10,
		flex: 2,
	},
	priceContainer:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		marginBottom: 15,
	},
	fuelTag: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FFE600'
	},
	price:{
		marginLeft: 10,
		padding: 5,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FFF',
		backgroundColor: '#1D1D1D',
		borderRadius: 5,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bottomContentContainer:{
		flex: 1,
		padding: 10,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	goButton:{
		width: '40%',
		backgroundColor: '#FFE600',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		padding: 5,
	},
	title:{
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FFE600'
	},
	closeButton:{
		height: 30,
		width: 30,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A83232'
	},
	icon:{
		height: 20,
		width: 20
	}

})