import React, { Component } from 'react';
import GameManagement from './GameManagement';
import PlayField from './PlayField';

class PlayScreen extends Component {
    render() {
        return (
            <>
                <GameManagement />
                <PlayField />
            </>
        )
    }
}

export default PlayScreen;