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

const ActionButtons = props => {
    const { gameOver, actions } = props;

    return (
        <div style={Styles.actionButtonContainer}>
            <button style={Styles.restartButton} onClick={actions.restartGame}>Restart</button>
            <button style={Styles.homeButton} onClick={actions.goToHome}>Home</button>
        </div>
    );
}

const EndGameMessage = props => {
    const { winner, winningPlayer, draw } = props;

    const getWinnerMessageStyling = player => {
        return Object.assign({}, Styles.endGameMessageContainer, Styles[`${player}WinnerMessage`]);
    }

    if (winner) {
        return (
            <div style={getWinnerMessageStyling(winner)}>
                {`${winningPlayer} has won!`}
            </div>
        );
    } else if (draw) {
        return <div style={Styles.endGameMessageContainer}>Cat's game!</div>
    }

    return <div style={Styles.endGameMessageContainer}></div>
}

export class TicTacToe extends Component {
    componentWillUpdate(nextProps) {
        const { game, updateWinnerScore } = nextProps;

        if (game.incrementScore)
            updateWinnerScore(game.winner);
    }

    render() {
        const {
            playerData,
            game,
            updateCell,
            restartGame,
            goToHome
        } = this.props;

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
                <EndGameMessage
                    winner={game.winner}
                    winningPlayer={playerData[`${game.winner}`] ? playerData[`${game.winner}`].name : ''}
                    draw={game.catsGame}
                />
                <div style={Styles.gameboardContainer}>
                    <BoardRow
                        position={0}
                        updateCell={updateCell}
                        player={game.nextMove}
                        row={game.board[0]}
                        gameOver={game.winner}
                    />
                    <hr style={Styles.horizontalLine}/>
                    <BoardRow
                        position={1}
                        updateCell={updateCell}
                        player={game.nextMove}
                        row={game.board[1]}
                        gameOver={game.winner}
                    />
                    <hr style={Styles.horizontalLine}/>
                    <BoardRow
                        position={2}
                        updateCell={updateCell}
                        player={game.nextMove}
                        row={game.board[2]}
                        gameOver={game.winner}
                    />
                </div>
                <ActionButtons gameOver={game.winner} actions={{restartGame, goToHome}}/>
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
            const moveAction = {
                type: Actions.game.makeMove,
                player,
                position
            }, toggleNextPlayerAction = {
                type: Actions.game.toggleNextPlayer
            };

            dispatch(moveAction);
            dispatch(toggleNextPlayerAction);
        },
        updateWinnerScore: player => {
            const updateWinnerScoreAction = {
                type: Actions.playerData[player].incrementScore
            }, updateScoreIncrementedAction = {
                type: Actions.game.scoreIncremented
            };

            dispatch(updateWinnerScoreAction);
            dispatch(updateScoreIncrementedAction);
        },
        restartGame: () => {
            const action = {
                type: Actions.game.restartGame
            };

            dispatch(action);
        },
        goToHome: () => {
            const action = {
                type: Actions.reset
            }

            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
