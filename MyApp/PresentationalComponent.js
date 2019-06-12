import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from "./Styles"

const PresentationalComponent = (props) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.myState} onPress = {props.updateState}>
                {props.myState}
            </Text>
            <View style = {styles.redbox}/>
            <View style = {styles.bluebox}/>
            <View style = {styles.blackbox}/>
        </View>
    )
}

export default PresentationalComponent