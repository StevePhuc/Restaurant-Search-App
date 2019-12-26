import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {

    return (
        <View>
            <Text> {result.name}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultsDetail