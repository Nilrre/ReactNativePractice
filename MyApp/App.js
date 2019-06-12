/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PresentationalComponent from './PresentationalComponent'
import List from './List'

export default class App extends React.Component {
  // state = {
  //   myState: "Hello World"
  // }
  // updateState = () => this.setState({ myState: "The state is updated"})
  render() {
    return(
      <View>
        {/* <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/> */}
          <List />
      </View>
    );
  }
}
