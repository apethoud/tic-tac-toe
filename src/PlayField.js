import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';

class PlayField extends Component {
    render() {

        const { boardSquares, markSquare } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Square 
                        number={0}
                        symbol={boardSquares[0].symbol}
                        markSquare={markSquare}
                    />
                    <Square 
                        number={1}
                        symbol={boardSquares[1].symbol}
                        markSquare={markSquare}
                    />
                    <Square 
                        number={2}
                        symbol={boardSquares[2].symbol}
                        markSquare={markSquare}
                    />
                </View>
                <View style={styles.row}>
                    <Square 
                        number={3}
                        symbol={boardSquares[3].symbol}
                        markSquare={markSquare}
                    />
                    <Square 
                        number={4}
                        symbol={boardSquares[4].symbol}
                        markSquare={markSquare}
                    />
                    <Square 
                        number={5}
                        symbol={boardSquares[5].symbol}
                        markSquare={markSquare}
                    />
                </View>
                <View style={styles.row}>
                    <Square 
                        number={6}
                        symbol={boardSquares[6].symbol}
                        markSquare={markSquare}
                    />
                    <Square 
                        number={7}
                        symbol={boardSquares[7].symbol}
                        markSquare={markSquare}
                    />
                    <Square 
                        number={8}
                        symbol={boardSquares[8].symbol}
                        markSquare={markSquare}
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