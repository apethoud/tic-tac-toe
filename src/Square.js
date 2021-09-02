import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons'

class Square extends Component {
    render() {
        return (
            <View style={styles.cell}>
                <FontAwesomeIcon 
                    icon={ faCircle } 
                    size={ 60 }
                />
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