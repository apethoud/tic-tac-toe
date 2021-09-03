import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';

class PlayField extends Component {

    render() {

        const { boardSquareSymbols, markSquare, completedRow } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Square 
                        number={0}
                        symbol={boardSquareSymbols[0]}
                        markSquare={markSquare}
                        inCompletedRow={completedRow && completedRow.winningSquares.includes(0)}
                    />
                    <Square 
                        number={1}
                        symbol={boardSquareSymbols[1]}
                        markSquare={markSquare}
                        inCompletedRow={completedRow && completedRow.winningSquares.includes(1)}
                    />
                    <Square 
                        number={2}
                        symbol={boardSquareSymbols[2]}
                        markSquare={markSquare}
                        inCompletedRow={completedRow && completedRow.winningSquares.includes(2)}
                    />
                </View>
                <View style={styles.row}>
                    <Square 
                        number={3}
                        symbol={boardSquareSymbols[3]}
                        markSquare={markSquare}
                        inCompletedRow={completedRow && completedRow.winningSquares.includes(3)}
                    />
                    <Square 
                        number={4}
                        symbol={boardSquareSymbols[4]}
                        markSquare={markSquare}
                        inCompletedRow={completedRow && completedRow.winningSquares.includes(4)}
                    />
                    <Square 
                        number={5}
                        symbol={boardSquareSymbols[5]}
                        markSquare={markSquare}
                        inCompletedRow={completedRow && completedRow.winningSquares.includes(5)}
                    />
                </View>
                <View style={styles.row}>
                    <Square 
                        number={6}
                        symbol={boardSquareSymbols[6]}
                        markSquare={markSquare}
                        inCompletedRow={completedRow && completedRow.winningSquares.includes(6)}
                    />
                    <Square 
                        number={7}
                        symbol={boardSquareSymbols[7]}
                        markSquare={markSquare}
                        inCompletedRow={completedRow && completedRow.winningSquares.includes(7)}
                    />
                    <Square 
                        number={8}
                        symbol={boardSquareSymbols[8]}
                        markSquare={markSquare}
                        inCompletedRow={completedRow && completedRow.winningSquares.includes(8)}
                    />
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