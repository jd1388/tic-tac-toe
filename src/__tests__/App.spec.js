import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from '../App';
import { Start } from '../Start';

import GameState from '../helpers/GameStates';

describe('<App/>', () => {
    let wrapper;

    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('Displays the start screen', () => {
        const startState = GameState.start;

        wrapper = shallow(<App gameState={startState}/>);

        const start = wrapper.children();

        expect(start).toHaveLength(1);
    });

    it('Displays the game screen', () => {
        const gameState = GameState.game.inProgress;

        wrapper = shallow(<App gameState={gameState}/>);

        const game = wrapper.children();

        expect(game).toHaveLength(1);
    })
});
