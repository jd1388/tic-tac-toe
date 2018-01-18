import Chance from 'chance';

import Actions from './Actions';
import GameStates from '../helpers/GameStates';

const getInitialState = () => {
    const chance = Chance();

    return {
        gameState: GameStates.start,
        nextMove: chance.pickone(['blue', 'red'])
    }
};

const setState = (previousState, property, value) => {
    return Object.assign({}, previousState, {
        [property]: value
    });
};

export default (state = getInitialState(), action) => {
    switch(action.type) {
        case Actions.game.setGameState:
            return setState(state, 'gameState', action.state);
        default:
            return state;
    }
}
