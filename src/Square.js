import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Square extends Component {
    render() {
        return (
            <View style={styles.cell}></View>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        width: 100,
        height: 100,
        borderWidth: 1,
    }
})

export default Square;