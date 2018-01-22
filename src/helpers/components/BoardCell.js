import React, { Component } from 'react';
import CircleOutlineIcon from 'mdi-react/CircleOutlineIcon';
import CloseIcon from 'mdi-react/CloseIcon';

import Styles from '../../styles/components/BoardCell';

const CellMarker = props => {
    const { symbol } = props;

    if (symbol === 'O')
        return <CircleOutlineIcon style={Styles.o}></CircleOutlineIcon>
    else if (symbol ==='X')
        return <CloseIcon style={Styles.x}></CloseIcon>

    return <div></div>;
};

export default class BoardCell extends Component {
    render() {
        const { cell } = this.props;

        return (
            <div style={Styles.boardCellContainer}>
                <CellMarker symbol={cell}/>
            </div>
        );
    }
}
