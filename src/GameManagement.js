import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class GameManagement extends Component {

    render() {
        const { whoseTurn, completedRow, resetBoard } = this.props;
        return (
            <>
                <View>
                    <Text>It's {whoseTurn}'s turn</Text>
                </View>
                {completedRow && (
                    <View>
                        <Button
                            title="New Game"
                            onPress={resetBoard}
                        />
                    </View>
                )}
            </>
        )
    }
}

export default GameManagement;