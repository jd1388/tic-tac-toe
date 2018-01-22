import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardRow from './helpers/components/BoardRow';
import Actions from './reducers/Actions';

import Styles from './styles/TicTacToe';

const styleInfoContainer = (player, nextMove) => {
    if (nextMove === player)
        return Object.assign({}, Styles[`${player}InfoContainer`], Styles[`${player}NextTurn`]);

    return Styles[`${player}InfoContainer`];
}

export class TicTacToe extends Component {
    render() {
        const { playerData, game, updateCell } = this.props;

        return (
            <div>
                <div style={Styles.headerContainer}>
                    <div style={styleInfoContainer('blue', game.nextMove)}>
                        <span style={Styles.name}>{playerData.blue.name}</span>
                    </div>
                    <div style={styleInfoContainer('red', game.nextMove)}>
                        <span style={Styles.name}>{playerData.red.name}</span>
                    </div>
                </div>
                <div style={Styles.scoreContainer}>
                    <span style={Styles.blueScore}>{playerData.blue.score}</span>
                    <span>{' - '}</span>
                    <span style={Styles.redScore}>{playerData.red.score}</span>
                </div>
                <div style={Styles.gameboardContainer}>
                    <BoardRow
                        position={0}
                        updateCell={updateCell}
                        player={game.nextMove}
                        row={game.board[0]}
                    />
                    <hr style={Styles.horizontalLine}/>
                    <BoardRow
                        position={1}
                        updateCell={updateCell}
                        player={game.nextMove}
                        row={game.board[1]}
                    />
                    <hr style={Styles.horizontalLine}/>
                    <BoardRow
                        position={2}
                        updateCell={updateCell}
                        player={game.nextMove}
                        row={game.board[2]}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { PlayerData, Game } = state;

    return {
        playerData: PlayerData,
        game: Game
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateCell: (player, position) => {
            const action = {
                type: Actions.game.makeMove,
                player,
                position
            };

            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
