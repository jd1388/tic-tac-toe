import Actions from './Actions';

const getInitialState = () => {
    return {
        blue: {
            name: '',
            score: 0
        },
        red: {
            name: '',
            score: 0
        }
    }
};

const setState = (previousState, property, value) => {
    return Object.assign({}, previousState, {
        [property]: value
    });
};

export default (state = getInitialState(), action) => {
    switch(action.type) {
        case Actions.playerData.blue.setName:
            return setState(state, 'blue', Object.assign({}, state.blue, {
                name: action.name
            }));
        case Actions.playerData.blue.incrementScore:
            return setState(state, 'blue', Object.assign({}, state.blue, {
                score: state.blue.score + 1
            }));
        case Actions.playerData.red.setName:
            return setState(state, 'red', Object.assign({}, state.red, {
                name: action.name
            }));
        case Actions.playerData.red.incrementScore:
            return setState(state, 'red', Object.assign({}, state.red, {
                score: state.red.score + 1
            }));
        case Actions.reset:
            return getInitialState();
        default:
            return state;
    }
}