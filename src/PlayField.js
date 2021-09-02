import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class PlayField extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.cell}></View>
                    <View style={styles.cell}></View>
                    <View style={styles.cell}></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.cell}></View>
                    <View style={styles.cell}></View>
                    <View style={styles.cell}></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.cell}></View>
                    <View style={styles.cell}></View>
                    <View style={styles.cell}></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
    },
    row: {
        flexDirection: "row",
    },
    cell: {
        width: 100,
        height: 100,
        borderWidth: 1,
    }
})

export default PlayField;