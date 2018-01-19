import React, { Component } from 'react';

import Styles from '../../styles/components/BoardCell';

const CellMarker = props => {
    const { symbol } = props;

    if (symbol === 'O')
        return <div style={Styles.o}></div>
    else if (symbol ==='X')
        return <div style={Styles.x}></div>

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
