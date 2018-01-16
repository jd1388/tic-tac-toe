import React, { Component } from 'react';

const styles = {
    startHeader: {
        textAlign: 'center',
        marginTop: '20rem',
        fontSize: '3rem',
        fontWeight: 'normal',
        color: ''
    },
    bluePlayerContainer: {
        backgroundColor: '#73B1E6',
        display: 'inline-block',
        width: '50rem',
        marginLeft: '10rem',
        marginTop: '10rem',
        textAlign: 'center',
        paddingTop: '1rem',
        paddingBottom: '1.5rem',
        textAlign: 'center',
        borderRadius: '1.5rem'
    },
    bluePlayerInputLabel: {
        color: 'white',
        fontSize: '2rem',
        paddingBottom: '1rem'
    },
    bluePlayerInput: {
        borderRadius: '0.5rem',
        borderColor: '#1F1FAB',
        borderStyle: 'solid',
        width: '50%',
        padding: '0.5rem',
        fontSize: '1rem'
    },
    redPlayerContainer: {
        backgroundColor: '#CE6E6E',
        display: 'inline-block',
        width: '50rem',
        float: 'right',
        marginRight: '10rem',
        marginTop: '10rem',
        paddingTop: '1rem',
        paddingBottom: '1.5rem',
        textAlign: 'center',
        borderRadius: '1.5rem'
    },
    redPlayerInputLabel: {
        color: 'white',
        fontSize: '2rem',
        paddingBottom: '1rem'
    },
    redPlayerInput: {
        borderRadius: '0.5rem',
        borderColor: '#AD0E2A',
        borderStyle: 'solid',
        width: '50%',
        padding: '0.5rem',
        fontSize: '1rem'
    }
}

export default class Start extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.startHeader}>Players, enter your names below!</h1>
                <div style={styles.bluePlayerContainer}>
                    <div style={styles.bluePlayerInputLabel}>Blue Player</div>
                    <input style={styles.bluePlayerInput}/>
                </div>
                <div style={styles.redPlayerContainer}>
                    <div style={styles.redPlayerInputLabel}>Red Player</div>
                    <input style={styles.redPlayerInput}/>
                </div>
            </div>
        );
    }
}
