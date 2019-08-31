import React, {Component} from 'react';
import {
	View, 
	ScrollView, 
	Image, 
	Text, 
	TouchableOpacity, 
	StyleSheet, 
	Modal
} from 'react-native';
import StationModal from './StationModal';


export default class StationList extends Component{
	constructor(props){
		super(props);
		this.state = {
			bgColor : this.props.pos % 2 == 0? '#2D2D2D' : '#272727',
			infoVisible: false
		}
	}

	render(){
		return(
			<View style = {[styles.container, {backgroundColor: this.state.bgColor}]}>
				<TouchableOpacity 
					style = {styles.infoContainer} 
					onPress = {() => this.setState({infoVisible: true})}
				>
					<View style = {styles.selfContainer}>
						<Text style = {styles.title}>{this.props.info.name}</Text>
						<View style = {styles.ratingContainer}>
							<Image 
							style = {styles.icon}
							source = {require('../../images/like.png')}
							/>
							<Text style = {styles.number}> :  {this.props.likes} </Text>
							<Image 
							style = {styles.icon}
							source = {require('../../images/dislike.png')}
							/>
							<Text style = {styles.number}> :  {this.props.dislikes} </Text>
						</View>
					</View>
					<View style = {styles.priceContainer}>
						<Text style = {styles.fuelTag}>{this.props.favFuel} :</Text>
						<Text style = {styles.price}>{this.props.value}</Text>
					</View>
					<View style = {[styles.ratingBar, {backgroundColor: this.props.rtColor}]} />
				</TouchableOpacity>
				<Modal
		        	animationType="slide"
		        	transparent={true}
		        	visible={this.state.infoVisible}
				>
		          <StationModal 
		          info = {this.props.info}
		          userPos = {this.props.userPos}
		          closeModal = {() => this.setState({infoVisible: false})}
		          />
		        </Modal>
			</View>
		
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginBottom: 5,
	},
	infoContainer:{
		flexDirection: 'row',
		padding: 10,
	},
	selfContainer: {
		flex: 1,
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFE600'
	},
	ratingContainer:{
		marginTop: 15,
		flexDirection: 'row',
	},
	icon: {
		maxHeight: 20,
		maxWidth: 20,
	},
	number: {
		marginRight: 10,
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFF'
	},
	priceContainer:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
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
	ratingBar:{
		width: '5%',
		height: '100%',
		borderRadius: 10,
	}
})