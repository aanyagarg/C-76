import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MeteorScreen extends Component{
    render(){
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Meteor</Text>
            </View>
        )
    }
}