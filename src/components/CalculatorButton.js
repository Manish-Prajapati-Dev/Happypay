import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CalculatorButton({ title,}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: 70,
        height: 70,
        borderRadius: 10,
        borderColor:'#e7e7e7',
        borderWidth:1,
        shadowColor: 'rgba(0,0,0,0.5)',
        margin: 5,
        alignSelf: 'center'
    },
    text: {
        color: '#000',
        fontSize: 25
    }
})