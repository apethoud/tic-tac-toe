import React, { Component } from 'react';
import GameManagement from './GameManagement';
import PlayField from './PlayField';
import _ from 'lodash';

const POSSIBLE_WINS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

class PlayScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whoseTurn: "X",
            boardSquareSymbols: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ]
        };
        this.markSquare = this.markSquare.bind(this);
        this.getCompletedRow = this.getCompletedRow.bind(this);
    }

    markSquare(squareNumber) {
        if (this.state.boardSquareSymbols[squareNumber] === null) {
            let tempboardSquareSymbols = _.clone(this.state.boardSquareSymbols);
            tempboardSquareSymbols[squareNumber] = this.state.whoseTurn;
            this.setState(state => ({
                boardSquareSymbols: tempboardSquareSymbols,
                whoseTurn: state.whoseTurn === "X" ? "O" : "X"
            }))
        }
    }

    getCompletedRow() {
        let boardSquareSymbols = _.clone(this.state.boardSquareSymbols);
        let completedRowData = null;
        _.forEach(POSSIBLE_WINS, possibleWinIndexes => {
            if (
                boardSquareSymbols[possibleWinIndexes[0]] !== null &&
                boardSquareSymbols[possibleWinIndexes[0]] === boardSquareSymbols[possibleWinIndexes[1]] &&
                boardSquareSymbols[possibleWinIndexes[0]] === boardSquareSymbols[possibleWinIndexes[2]]
            ) {
                completedRowData = {
                    winningSymbol: boardSquareSymbols[possibleWinIndexes[0]],
                    winningSquares: possibleWinIndexes
                }
            }
        })
        return completedRowData;
    }

    render() {
        const completedRow = this.getCompletedRow();
        return (
            <>
                <GameManagement 
                    whoseTurn={this.state.whoseTurn}
                    completedRow={completedRow}
                />
                <PlayField 
                    boardSquareSymbols={this.state.boardSquareSymbols}
                    completedRow={completedRow}
                    markSquare={this.markSquare}
                />
            </>
        )
    }
}

export default PlayScreen;