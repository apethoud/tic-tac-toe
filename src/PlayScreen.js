import React, { Component } from 'react';
import GameManagement from './GameManagement';
import PlayField from './PlayField';
import _ from 'lodash';

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
        // if there are three squares that have the same symbol and their index values are the same number apart, return those three numbers in an array.
        // if boardSquareSymbols contains the same non-null value in three indeces that are equidistant, return those three indeces in an array.
        // if bSS contains three
        return {
            winningSymbol: "X",
            winningSquares: [0, 3, 6]
        };
    }

    render() {
        return (
            <>
                <GameManagement 
                    getCompletedRow={this.getCompletedRow}
                />
                <PlayField 
                    boardSquareSymbols={this.state.boardSquareSymbols}
                    getCompletedRow={this.getCompletedRow}
                    markSquare={this.markSquare}
                />
            </>
        )
    }
}

export default PlayScreen;