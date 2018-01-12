import React, { Component } from 'react';

const styles = {
    startHeader: {
        textAlign: 'center',
        marginTop: '20rem',
        fontSize: '3rem',
        fontWeight: 'normal'
    },
    bluePlayerContainer: {
        backgroundColor: '#73B1E6',
        display: 'inline-block',
        width: '50rem',
        marginLeft: '10rem',
        marginTop: '10rem'
    },
    bluePlayerInputLabel: {
        color: 'white'
    },
    redPlayerContainer: {
        backgroundColor: '#CE6E6E',
        display: 'inline-block',
        width: '50rem',
        float: 'right',
        marginRight: '10rem',
        marginTop: '10rem'
    },
    redPlayerInputLabel: {
        color: '#111111'
    }
}

export default class Start extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.startHeader}>Players, enter your names below!</h1>
                <div style={styles.bluePlayerContainer}>
                    <div style={styles.bluePlayerInputLabel}>Blue Player's Name</div>
                    <input/>
                </div>
                <div style={styles.redPlayerContainer}>
                    <div style={styles.redPlayerInputLabel}>Red Player's Name</div>
                    <input/>
                </div>
            </div>
        );
    }
}
