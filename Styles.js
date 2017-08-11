import React, { Component } from 'react';
import {
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textinput: {
		height: 40,
		width: 100,
		textAlign: 'center',
	},
	regularText: {
		fontSize: 16,
	},
	strikethroughText: {
		fontSize: 16,
		textDecorationLine: 'line-through',
	},
	errorLabel: {
		fontSize: 14,
		color: 'red',
	},
	modalButton: {
	    backgroundColor: 'lightblue',
	    padding: 12,
	    margin: 16,
	    justifyContent: 'center',
	    alignItems: 'center',
	    borderRadius: 4,
	    borderColor: 'rgba(0, 0, 0, 0.1)',
	},
	modalContent: {
	    backgroundColor: 'white',
	    padding: 22,
	    justifyContent: 'center',
	    alignItems: 'center',
	    borderRadius: 4,
	    borderColor: 'rgba(0, 0, 0, 0.1)',
	},
});


export default styles;