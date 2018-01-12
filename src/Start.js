import React, { Component } from 'react';

const styles = {
    startHeader: {
        textAlign: 'center',
        marginTop: '20rem',
        fontSize: '3rem',
        fontWeight: 'normal'
    }
}

export default class Start extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.startHeader}>Players, enter your names below!</h1>
                
            </div>
        );
    }
}
