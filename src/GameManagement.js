import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class GameManagement extends Component {

    render() {
        const { whoseTurn } = this.props;
        return (
            <>
                <View>
                    <Text>It's {whoseTurn}'s turn</Text>
                </View>
                <View>
                    <Button
                        title="New Game"
                    />
                </View>
            </>
        )
    }
}

export default GameManagement;