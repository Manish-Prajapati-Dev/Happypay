import { View, Text, StyleSheet, TouchableOpacity, Vibration } from 'react-native'
import React, { useState } from 'react'
import CalculatorButton from './CalculatorButton'

export default function Calculator({ selectData, data }) {

    const buttons = () => { // show all the buttons
        return (
            data.map((item) => {
                return (
                    <View key={item} style={styles.buttonContainer} >
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => selectData(item)} >
                            <CalculatorButton title={item} />
                        </TouchableOpacity>
                    </View>
                )
            })
        )
    }

    return (
        <View style={styles.container}>
            {buttons()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    buttonContainer: { justifyContent: 'center', alignItems: 'center' }
})