import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class PlayScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>grid goes here</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        borderWidth: 2,
        backgroundColor: "#E6C8EF"
    }
})

export default PlayScreen;