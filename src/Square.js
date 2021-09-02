import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Square extends Component {
    render() {

        const { symbol } = this.props;

        return (
            <View style={styles.cell}>
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
    }
})

export default Square;