import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import _ from 'lodash';

class GameManagement extends Component {

    render() {
        const { boardSquareSymbols, whoseTurn, completedRow, resetBoard } = this.props;
        const allSquaresMarked = _.every(boardSquareSymbols, symbol => {
            return symbol !== null;
        })
        return (
            <>
                <View style={styles.container}>
                    {completedRow ? (
                        <Text style={styles.whoseTurn}>
                            {completedRow.winningSymbol} won!
                        </Text>
                    ) : (!completedRow && allSquaresMarked) ? (
                        <Text style={styles.whoseTurn}>
                            No winner!
                        </Text>
                    ) : (
                        <Text style={styles.whoseTurn}>
                            It's {whoseTurn}'s turn
                        </Text>
                    )}
                </View>
                <View style={styles.container}>
                    <Button
                        title={(completedRow || (!completedRow && allSquaresMarked)) ? "New Game" : "Restart Game"}
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