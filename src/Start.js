import React, { Component } from 'react';

import Styles from './styles/Start';

export default class Start extends Component {
    render() {
        return (
            <div>
                <h1 style={Styles.startHeader}>Players, enter your names below!</h1>
                <div style={Styles.bluePlayerContainer}>
                    <div style={Styles.bluePlayerInputLabel}>Blue Player</div>
                    <input style={Styles.bluePlayerInput}/>
                </div>
                <div style={Styles.redPlayerContainer}>
                    <div style={Styles.redPlayerInputLabel}>Red Player</div>
                    <input style={Styles.redPlayerInput}/>
                </div>
            </div>
        );
    }
}
