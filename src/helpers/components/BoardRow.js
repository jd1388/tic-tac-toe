import React, { Component } from 'react';

import BoardCell from './BoardCell';

import Styles from '../../styles/components/BoardRow';

const getCellPosition = (row, position) => {
    return row * 3 + position;
};

export default class BoardRow extends Component {
    render() {
        const {
            position,
            updateCell,
            player,
            row,
            gameOver
        } = this.props;

        return (
            <div style={Styles.boardRowContainer}>
                <BoardCell
                    position={getCellPosition(position, 0)}
                    updateCell={updateCell}
                    player={player}
                    cell={row[0]}
                    gameOver={gameOver}
                />
                <div style={Styles.verticalLine}></div>
                <BoardCell
                    position={getCellPosition(position, 1)}
                    updateCell={updateCell}
                    player={player}
                    cell={row[1]}
                    gameOver={gameOver}
                />
                <div style={Styles.verticalLine}></div>
                <BoardCell
                    position={getCellPosition(position, 2)}
                    updateCell={updateCell}
                    player={player}
                    cell={row[2]}
                    gameOver={gameOver}
                />
            </div>
        );
    }
}
