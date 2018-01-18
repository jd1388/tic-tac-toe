import React, { Component } from 'react';

import Styles from '../../styles/components/BoardCell';

export default class BoardCell extends Component {
    render() {
        return (
            <div style={Styles.boardCellContainer}></div>
        );
    }
}
