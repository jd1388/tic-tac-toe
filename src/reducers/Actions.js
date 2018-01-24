let i = 0;

export default class Actions {
    static reset = i++;

    static playerData = {
        blue: {
            setName: i++,
            incrementScore: i++
        },
        red: {
            setName: i++,
            incrementScore: i++
        }
    };

    static game = {
        setGameState: i++,
        makeMove: i++,
        toggleNextPlayer: i++,
        scoreIncremented: i++,
        restartGame: i++
    };
}
