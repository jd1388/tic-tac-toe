import React, { Component } from 'react';
import { connect } from 'react-redux';

import Actions from './reducers/Actions';

import Styles from './styles/Start';

const isButtonEnabled = playerData => {
    const {
        blue,
        red
    } = playerData;

    return blue.name && red.name;
}

const applyButtonStylings = playerData => {
    const buttonColor = isButtonEnabled(playerData) ? Styles.startButtonEnabled : Styles.startButtonDisabled;

    return Object.assign({}, Styles.startButton, buttonColor);
}

export class Start extends Component {
    render() {
        const {
            setBlueName,
            setRedName,
            playerData
        } = this.props;

        return (
            <div>
                <h1 style={Styles.startHeader}>Players, enter your names below!</h1>
                <div style={Styles.bluePlayerContainer}>
                    <div style={Styles.bluePlayerInputLabel}>Blue Player</div>
                    <input style={Styles.bluePlayerInput} onChange={setBlueName}/>
                </div>
                <div style={Styles.redPlayerContainer}>
                    <div style={Styles.redPlayerInputLabel}>Red Player</div>
                    <input style={Styles.redPlayerInput} onChange={setRedName}/>
                </div>
                <div style={Styles.startButtonContainer}>
                    <button style={applyButtonStylings(playerData)}>
                        Start!
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        playerData: state.PlayerData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setBlueName: event => {
            const value = event.target.value,
                action = {
                    type: Actions.playerData.blue.setName,
                    name: value.trim()
                }

            dispatch(action);
        },
        setRedName: event => {
            const value = event.target.value,
                action = {
                    type: Actions.playerData.red.setName,
                    name: value.trim()
                }

            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
