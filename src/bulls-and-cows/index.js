/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function (secret, guess) {
    let bulls = 0;
    let secretMap = new Map(), guessMap = new Map();
    for (let i = 0; i < secret.length; ++i) {
        if (secret[i] === guess[i]) {
            ++bulls;
            continue;
        }
        let secretCount = secretMap.get(secret[i]);
        secretMap.set(secret[i], secretCount ? secretCount + 1 : 1);
        let guessCount = guessMap.get(guess[i]);
        guessMap.set(guess[i], guessCount ? guessCount + 1 : 1);
    }
    let cows = 0;
    for (let pair of secretMap.entries()) {
        let guessCount = guessMap.get(pair[0]);
        if (guessCount) {
            cows += Math.min(guessCount, pair[1]);
        }
    }
    return bulls + 'A' + cows + 'B';
};

module.exports = getHint;