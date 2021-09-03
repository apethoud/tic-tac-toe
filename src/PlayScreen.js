import React, { Component } from 'react';
import GameManagement from './GameManagement';
import PlayField from './PlayField';
import _ from 'lodash';

class PlayScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whoseTurn: "X",
            boardSquares: [
                { symbol: null },
                { symbol: null },
                { symbol: null },
                { symbol: null },
                { symbol: null },
                { symbol: null },
                { symbol: null },
                { symbol: null },
                { symbol: null }
            ]
        };
        this.markSquare = this.markSquare.bind(this);
        this.getCompletedRow = this.getCompletedRow.bind(this);
    }

    markSquare(squareNumber) {
        if (this.state.boardSquares[squareNumber].symbol === null) {
            let tempBoardSquares = _.clone(this.state.boardSquares);
            tempBoardSquares[squareNumber].symbol = this.state.whoseTurn;
            this.setState(state => ({
                boardSquares: tempBoardSquares,
                whoseTurn: state.whoseTurn === "X" ? "O" : "X"
            }))
        }
    }

    getCompletedRow() {
        let boardSquares = this.state.boardSquares;
        // if there are three indeces that have the same symbol and 
        return [0, 3, 6];
    }

    render() {
        return (
            <>
                <GameManagement 
                    getCompletedRow={this.getCompletedRow}
                />
                <PlayField 
                    boardSquares={this.state.boardSquares}
                    getCompletedRow={this.getCompletedRow}
                    markSquare={this.markSquare}
                />
            </>
        )
    }
}

export default PlayScreen;