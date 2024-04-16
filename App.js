import { StyleSheet, View } from 'react-native'
import React from 'react'
import MainScreen from "./src/screens/MainScreen"

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})