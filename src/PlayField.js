import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';

class PlayField extends Component {

    render() {

        const { boardSquares, markSquare, getCompletedRow } = this.props;
        const hasCompletedRow = Boolean(getCompletedRow());

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Square 
                        number={0}
                        symbol={boardSquares[0].symbol}
                        markSquare={markSquare}
                        inCompletedRow={hasCompletedRow && getCompletedRow().includes(0)}
                    />
                    <Square 
                        number={1}
                        symbol={boardSquares[1].symbol}
                        markSquare={markSquare}
                        inCompletedRow={hasCompletedRow && getCompletedRow().includes(1)}
                    />
                    <Square 
                        number={2}
                        symbol={boardSquares[2].symbol}
                        markSquare={markSquare}
                        inCompletedRow={hasCompletedRow && getCompletedRow().includes(2)}
                    />
                </View>
                <View style={styles.row}>
                    <Square 
                        number={3}
                        symbol={boardSquares[3].symbol}
                        markSquare={markSquare}
                        inCompletedRow={hasCompletedRow && getCompletedRow().includes(3)}
                    />
                    <Square 
                        number={4}
                        symbol={boardSquares[4].symbol}
                        markSquare={markSquare}
                        inCompletedRow={hasCompletedRow && getCompletedRow().includes(4)}
                    />
                    <Square 
                        number={5}
                        symbol={boardSquares[5].symbol}
                        markSquare={markSquare}
                        inCompletedRow={hasCompletedRow && getCompletedRow().includes(5)}
                    />
                </View>
                <View style={styles.row}>
                    <Square 
                        number={6}
                        symbol={boardSquares[6].symbol}
                        markSquare={markSquare}
                        inCompletedRow={hasCompletedRow && getCompletedRow().includes(6)}
                    />
                    <Square 
                        number={7}
                        symbol={boardSquares[7].symbol}
                        markSquare={markSquare}
                        inCompletedRow={hasCompletedRow && getCompletedRow().includes(7)}
                    />
                    <Square 
                        number={8}
                        symbol={boardSquares[8].symbol}
                        markSquare={markSquare}
                        inCompletedRow={hasCompletedRow && getCompletedRow().includes(8)}
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