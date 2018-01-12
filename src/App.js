import React, { Component } from 'react';

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

class App extends Component {
    render() {
        // const { gameState } = this.props;
        const gameState = GameStates.start;

        return (
            <div style={styles.appContainer}>
                {stateToRender(gameState)}
            </div>
        );     
    }
}

export default App;
