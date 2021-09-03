import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class GameManagement extends Component {

    render() {
        const { whoseTurn, completedRow, resetBoard } = this.props;
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.whoseTurn}>
                        It's {whoseTurn}'s turn
                    </Text>
                </View>
                <View style={styles.container}>
                    <Button
                        title={completedRow ? "New Game" : "Restart Game"}
                        onPress={resetBoard}
                    />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    whoseTurn: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default GameManagement;