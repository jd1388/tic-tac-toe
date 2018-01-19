import Chance from 'chance';

import Actions from './Actions';
import GameStates from '../helpers/GameStates';

const initializeBoard = () => {
    return [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]
};

const getInitialState = () => {
    const chance = Chance();

    return {
        gameState: GameStates.start,
        nextMove: chance.pickone(['blue', 'red']),
        board: initializeBoard()
    }
};

const updateBoard = (previousBoard, player, position) => {
    const newBoard = [];

    const rowToUpdate = Math.floor(position / 3);
    const newRow = previousBoard[rowToUpdate]

    if (player === 'red')
        newRow[position % 3] = 'O';
    else
        newRow[position % 3] = 'X';

    if (rowToUpdate === 0)
        newBoard.push(newRow, previousBoard[1], previousBoard[2]);
    else if (rowToUpdate === 1)
        newBoard.push(previousBoard[0], newRow, previousBoard[2]);
    else
        newBoard.push(previousBoard[0], previousBoard[1], newRow);

    return newBoard;
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
        case Actions.game.makeMove:
            return setState(state, 'board', updateBoard(state.board, action.player, action.position))
        default:
            return state;
    }
}
