export default {
    blueInfoContainer: {
        display: 'inline-block',
        backgroundColor: '#73B1E6',
        height: '5rem',
        padding: '2rem 3rem',
        borderRadius: '0 0 2rem 0',
    },
    redInfoContainer: {
        display: 'inline-block',
        backgroundColor: '#CE6E6E',
        height: '5rem',
        padding: '2rem 3rem',
        borderRadius: '0 0 0 2rem',
        float: 'right',
        textAlign: 'right'
    },
    name: {
        color: 'white',
        fontSize: '4rem'
    },
    gameboardContainer: {
        width: '50rem',
        height: '50rem',
        margin: '3rem auto 4rem auto'
    },
    horizontalLine: {
        borderWidth: '0.5rem',
        borderStyle: 'solid',
        margin: '0 auto',
        borderColor: 'black'
    },
    scoreContainer: {
        textAlign: 'center',
        fontSize: '4rem',
        marginTop: '-7rem'
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    blueScore: {
        color: '#73B1E6'
    },
    redScore: {
        color: '#CE6E6E'
    },
    blueNextTurn: {
        borderWidth: '0 1rem 1rem 0',
        borderStyle: 'solid',
        borderColor: '#2B7BC0'
    },
    redNextTurn: {
        borderWidth: '0 0 1rem 1rem',
        borderStyle: 'solid',
        borderColor: '#AA4343'
    },
    actionButtonContainer: {
        width: '40%',
        margin: '0 auto',
        paddingBottom: '4rem',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    homeButton: {
        fontSize: '1.5rem',
        padding: '0.75rem 1rem',
        borderRadius: '1.5rem',
        borderStyle: 'none',
        color: 'white',
        float: 'right',
        backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        cursor: 'pointer'
    },
    restartButton: {
        fontSize: '1.5rem',
        padding: '0.75rem 1rem',
        borderRadius: '1.5rem',
        borderStyle: 'none',
        color: 'white',
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        cursor: 'pointer'
    },
    endGameMessageContainer: {
        textAlign: 'center',
        paddingTop: '3rem',
        fontSize: '2rem',
        lineHeight: 0,
        height: '2rem'
    },
    redWinnerMessage: {
        color: '#CE6E6E'
    },
    blueWinnerMessage: {
        color: '#73B1E6'
    },
    restartIcon: {
        fill: 'white',
        height: '1.5rem'
    }
}
