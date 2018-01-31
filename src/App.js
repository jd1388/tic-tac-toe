import React, { Component } from 'react';
import { connect } from 'react-redux';

import Start from './Start';
import TicTacToe from './TicTacToe';

import GameStates from './helpers/GameStates';

const styles = {
    appContainer: {
        fontFamily: 'Roboto'
    }
}

const stateToRender = gameState => {
    if (gameState === GameStates.start)
        return <Start/>;

    return <TicTacToe/>;
}

export class App extends Component {
    render() {
        const { gameState } = this.props;

        return (
            <div style={styles.appContainer}>
                {stateToRender(gameState)}
            </div>
        );     
    }
}

const mapStateToProps = state => {
    const { gameState } = state.Game;

    return { gameState };
};

export default connect(mapStateToProps)(App);
