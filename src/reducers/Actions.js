let i = 0;

export default class Actions {
    static playerData = {
        blue: {
            setName: i++
        },
        red: {
            setName: i++
        }
    }

    static game = {
        setGameState: i++,
        makeMove: i++,
        toggleNextPlayer: i++
    }
}
