import React, { Component } from 'react';

import BoardCell from './BoardCell';

import Styles from '../../styles/components/BoardRow';

export default class BoardRow extends Component {
    render() {
        return (
            <div style={Styles.boardRowContainer}>
                <BoardCell/>
                <div style={Styles.verticalLine}></div>
                <BoardCell/>
                <div style={Styles.verticalLine}></div>
                <BoardCell/>
            </div>
        );
    }
}
