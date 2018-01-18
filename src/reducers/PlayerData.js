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
        case Actions.playerData.red.setName:
            return setState(state, 'red', Object.assign({}, state.blue, {
                name: action.name
            }));
        default:
            return state;
    }
}