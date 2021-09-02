import React, { Component } from 'react';
import GameManagement from './GameManagement';
import PlayField from './PlayField';

class PlayScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whoseTurn: "X",
            boardSquares: [
                { symbol: null },
                { symbol: "O" },
                { symbol: null },
                { symbol: "X" },
                { symbol: null },
                { symbol: null },
                { symbol: null },
                { symbol: null },
                { symbol: null }
            ]
        }
    }

    render() {
        return (
            <>
                <GameManagement />
                <PlayField 
                    boardSquares={this.state.boardSquares}
                />
            </>
        )
    }
}

export default PlayScreen;