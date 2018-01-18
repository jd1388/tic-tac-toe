import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardRow from './helpers/components/BoardRow';

import Styles from './styles/TicTacToe';

const styleInfoContainer = (player, nextMove) => {
    if (nextMove === player)
        return Object.assign({}, Styles[`${player}InfoContainer`], Styles[`${player}NextTurn`]);

    return Styles[`${player}InfoContainer`];
}

export class TicTacToe extends Component {
    render() {
        const { playerData, game } = this.props;

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
                    <BoardRow/>
                    <hr style={Styles.horizontalLine}/>
                    <BoardRow/>
                    <hr style={Styles.horizontalLine}/>
                    <BoardRow/>
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

export default connect(mapStateToProps)(TicTacToe);
