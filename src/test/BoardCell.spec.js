import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chance from 'chance';

import BoardCell from '../helpers/components/BoardCell';

describe('<App/>', () => {
    let wrapper,
        cell,
        updateCell,
        player,
        position,
        gameOver;

    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    beforeEach(() => {
        const chance = Chance();

        cell = chance.character();
        updateCell = () => {};
        player = chance.pick(['red', 'blue']);
        position = chance.integer({min: 0, max: 8});
        gameOver = chance.bool();
    });

    it('renders correctly', () => {
        wrapper = shallow(<BoardCell
            cell={cell}
            updateCell={updateCell}
            player={player}
            position={position}
            gameOver={gameOver}
        />);

        expect(wrapper.type()).toBe('div');
    });
});
