import React, { Component } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Square extends Component {
    render() {

        const { number, symbol, markSquare, inCompletedRow } = this.props;

        return (
            <Pressable onPress={() => markSquare(number)}>
                <View style={[ styles.cell, inCompletedRow ? styles.completedRowCell : null ]}>
                    {symbol === "X" && (
                        <FontAwesomeIcon 
                            icon={ faTimes } 
                            size={ 60 }
                        />
                    )}
                    {symbol === "O" && (
                        <FontAwesomeIcon 
                            icon={ faCircle } 
                            size={ 60 }
                        />
                    )}
                </View>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        width: 100,
        height: 100,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    completedRowCell: {
        backgroundColor: "lightgreen"
    }
})

export default Square;