import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Start from './Start';
import TicTacToe from './TicTacToe';

import GameStates from './helpers/GameStates';
import reducers from './reducers/reducers';

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
    constructor() {
        super();

        const store = createStore(reducers);

        this.state = {
            store
        }

        store.subscribe(() => {
            console.log('Store State: ', store.getState());
        });
    }

    render() {
        // const { gameState } = this.props;
        const gameState = GameStates.start;

        return (
            <Provider store={this.state.store}>
                <div style={styles.appContainer}>
                    {stateToRender(gameState)}
                </div>
            </Provider>
        );     
    }
}

export default App;
