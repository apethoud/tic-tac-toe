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
];

const BLANK_BOARD = [
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

class PlayScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whoseTurn: "X",
            boardSquareSymbols: _.clone(BLANK_BOARD)
        };
        this.markSquare = this.markSquare.bind(this);
        this.getCompletedRow = this.getCompletedRow.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
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

    resetBoard() {
        this.setState({ boardSquareSymbols: _.clone(BLANK_BOARD) })
    }

    render() {
        const completedRow = this.getCompletedRow();
        return (
            <>
                <GameManagement 
                    whoseTurn={this.state.whoseTurn}
                    completedRow={completedRow}
                    resetBoard={this.resetBoard}
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