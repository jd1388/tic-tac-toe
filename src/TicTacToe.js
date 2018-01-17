import React, { Component } from 'react';
import { connect } from 'react-redux';

import Styles from './styles/TicTacToe';

export class TicTacToe extends Component {
    render() {
        const { playerData } = this.props;

        return (
            <div>
                <div style={Styles.blueInfoContainer}>
                    <span>{playerData.blue.name}</span>
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
