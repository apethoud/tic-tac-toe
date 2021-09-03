import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class GameManagement extends Component {

    render() {
        const { whoseTurn, completedRow } = this.props;
        return (
            <>
                <View>
                    <Text>It's {whoseTurn}'s turn</Text>
                </View>
                {completedRow && (
                    <View>
                        <Button
                            title="New Game"
                        />
                    </View>
                )}
            </>
        )
    }
}

export default GameManagement;