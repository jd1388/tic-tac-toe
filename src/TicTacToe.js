import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardRow from './helpers/components/BoardRow';

import Styles from './styles/TicTacToe';

export class TicTacToe extends Component {
    render() {
        const { playerData } = this.props;

        return (
            <div>
                <div style={Styles.headerContainer}>
                    <div style={Styles.blueInfoContainer}>
                        <span style={Styles.name}>{playerData.blue.name}</span>
                    </div>
                    <div style={Styles.redInfoContainer}>
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
    const { PlayerData } = state;

    return { playerData: PlayerData }
};

export default connect(mapStateToProps)(TicTacToe);
