import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import styles from "./Styles"

class List extends Component {
   state = {
      names: [
         { id: 0, name: 'Ben', },
         { id: 1, name: 'Susan', },
         { id: 2, name: 'Robert', },
         { id: 3, name: 'Mary', }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View>
             {
                 this.state.names.map((item, index) => (
                     <TouchableOpacity
                     key={item.id}
                     style = {styles.listContainer}
                     onPress = {() => this.alertItemName(item)}>
                         <Text style = {styles.Text}>
                             {item.name}
                         </Text>
                    </TouchableOpacity>
                 ))
             }
         </View>
      )
   }
}

export default List