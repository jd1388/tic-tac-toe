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
        board: initializeBoard(),
        winner: '',
        catsGame: false,
        incrementScore: false
    }
};

const updateBoard = (previousBoard, player, position) => {
    const newBoard = [];

    const rowToUpdate = Math.floor(position / 3);
    const newRow = previousBoard[rowToUpdate];
    const positionToUpdate = position % 3;

    if (player === 'red')
        newRow[positionToUpdate] = 'O';
    else
        newRow[positionToUpdate] = 'X';

    if (rowToUpdate === 0)
        newBoard.push(newRow, previousBoard[1], previousBoard[2]);
    else if (rowToUpdate === 1)
        newBoard.push(previousBoard[0], newRow, previousBoard[2]);
    else
        newBoard.push(previousBoard[0], previousBoard[1], newRow);

    return newBoard;
};

const getNextPlayer = currentPlayer => {
    if (currentPlayer === 'blue')
        return 'red';

    return 'blue'
};

const checkForWinCondition = state => {
    const { board } = state;

    const horizontalWin = (board[0][0] !== ' ' && board[0][0] === board[0][1] && board[0][0] === board[0][2])
        || (board[1][0] !== ' ' && board[1][0] === board[1][1] && board[1][0] === board[1][2])
        || (board[2][0] !== ' ' && board[2][0] === board[2][1] && board[2][0] === board[2][2]);

    const verticalWin = (board[0][0] !== ' ' && board[0][0] === board[1][0] && board[0][0] === board[2][0])
        || (board[0][1] !== ' ' && board[0][1] === board[1][1] && board[0][1] === board[2][1])
        || (board[0][2] !== ' ' && board[0][2] === board[1][2] && board[0][2] === board[2][2]);

    const diagonalWin = (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[0][0]=== board[2][2])
        || (board[2][0] !== ' ' && board[2][0] === board[1][1] && board[2][0] === board[0][2]);

    const catsGame = !(board[0].includes(' ') && board[1].includes(' ') && board[2].includes(' '));

    if ((horizontalWin || verticalWin || diagonalWin) && !state.winner) {
        const stateWithUpdatedWinner = setState(state, 'winner', state.nextMove);

        return setState(stateWithUpdatedWinner, 'incrementScore', true);
    } else if (catsGame) {
        return setState(state, 'catsGame', true);
    }

    return state;
}

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
            const newState = setState(state, 'board', updateBoard(state.board, action.player, action.position));

            return checkForWinCondition(newState);
        case Actions.game.toggleNextPlayer:
            return setState(state, 'nextMove', getNextPlayer(state.nextMove));
        case Actions.game.scoreIncremented:
            return setState(state, 'incrementScore', false);
        default:
            return state;
    }
}
