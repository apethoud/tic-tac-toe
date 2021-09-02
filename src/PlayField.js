import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';

class PlayField extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Square />
                    <Square />
                    <Square />
                </View>
                <View style={styles.row}>
                    <Square />
                    <Square />
                    <Square />
                </View>
                <View style={styles.row}>
                    <Square />
                    <Square />
                    <Square />
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
})

export default PlayField;