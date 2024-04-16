import { View, Text, StyleSheet, StatusBar, Alert } from 'react-native'
import React from 'react'
import Calculator from '../components/Calculator'
import Data from '../constants/Data'

export default function MainScreen() {

  const [calculateData, setCalculateData] = React.useState([]) //inputs values
  const [answer, setAnswer] = React.useState([]) // answer of calculation

  const selectButton = (val) => {
    let data = [...calculateData]
    if ((val != "C") && (val != "=")) {
      data.push(val)
      setCalculateData([...data])
    }
    else if (val == "C") {
      setCalculateData([])
      setAnswer([])
    }
    else if (val == "=") {
      calculation() //function call to calculate values
    }
  }

  function calculation() {
    if (calculateData.some(e => e == "+")) {
      const arrayAdd = [...calculateData]
      const added = arrayAdd.findIndex(ele => ele == "+")
      const dataAdd = arrayAdd.splice(0, added).join('')
      const valAdd = calculateData.slice(added + 1).join('')
      setAnswer([])
      if (valAdd.length > 0) {
        let addData = +dataAdd + +valAdd
        setAnswer(addData)
      }
    }
    else if (calculateData.some(e => e == "-")) {
      const arrayAdd = [...calculateData]
      const added = arrayAdd.findIndex(ele => ele == "-")
      const dataAdd = arrayAdd.splice(0, added).join('')
      const valAdd = calculateData.slice(added + 1).join('')
      setAnswer([])
      if (valAdd.length > 0) {
        let addData = +dataAdd - +valAdd
        setAnswer(addData)
      }
    }
    else if (calculateData.some(e => e == "*")) {
      const arrayAdd = [...calculateData]
      const added = arrayAdd.findIndex(ele => ele == "*")
      const dataAdd = arrayAdd.splice(0, added).join('')
      const valAdd = calculateData.slice(added + 1).join('')
      setAnswer([])
      if (valAdd.length > 0) {
        let addData = +dataAdd * +valAdd
        setAnswer(addData)
      }
    }
    else if (calculateData.some(e => e == "/")) {
      const arrayAdd = [...calculateData]
      const added = arrayAdd.findIndex(ele => ele == "/")
      const dataAdd = arrayAdd.splice(0, added).join('')
      const valAdd = calculateData.slice(added + 1).join('')
      setAnswer([])
      if (valAdd.length > 0) {
        let addData = +dataAdd / +valAdd
        setAnswer(parseFloat(addData).toFixed(2))
      }
    }
    else {
      Alert.alert("Invalid choice")
    }
  }

  return (
    <View style={styles.container} >
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      <View style={styles.dataPrint} >
        <Text style={styles.textStyle} numberOfLines={1} >{calculateData}</Text>
        <Text style={{ ...styles.textStyle, fontSize: 25 }} numberOfLines={1} >={answer}</Text>
      </View>
      <View>
        <Calculator data={Data.methods} selectData={(val) => selectButton(val)} /> 
        <Calculator data={Data.calculation} selectData={(val) => selectButton(val)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, position: 'absolute', bottom: '5%'
  },
  dataPrint: {
    marginVertical: '10%',
    justifyContent: 'flex-end',
  },
  textStyle: {
    color: '#000',
    fontSize: 45,
    textAlign: 'right',
    marginRight: 15
  }
})