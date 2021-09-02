import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';

class PlayField extends Component {
    render() {

        const { boardSquares } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Square 
                        symbol={boardSquares[0].symbol}
                    />
                    <Square 
                        symbol={boardSquares[1].symbol}
                    />
                    <Square 
                        symbol={boardSquares[2].symbol}
                    />
                </View>
                <View style={styles.row}>
                    <Square 
                        symbol={boardSquares[3].symbol}
                    />
                    <Square 
                        symbol={boardSquares[4].symbol}
                    />
                    <Square 
                        symbol={boardSquares[5].symbol}
                    />
                </View>
                <View style={styles.row}>
                    <Square 
                        symbol={boardSquares[6].symbol}
                    />
                    <Square 
                        symbol={boardSquares[7].symbol}
                    />
                    <Square 
                        symbol={boardSquares[8].symbol}
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