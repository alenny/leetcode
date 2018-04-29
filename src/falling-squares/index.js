class Square {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
}

class Level {
    constructor(height) {
        this.height = height;
        this.squares = [];
        this.upperLevel = null;
        this.lowerLevel = null;
    }
}

/**
 * @param {number[][]} positions
 * @return {number[]}
 */
const fallingSquares = function (positions) {
    let topLevel = new Level(0);
    topLevel.squares.push(new Square(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY));
    let topInfo = { top: topLevel };
    let ret = [];
    for (let idx = 0; idx < positions.length; ++idx) {
        ret.push(handleSquare(topInfo, positions[idx]));
    }
    return ret;
};

function handleSquare(topInfo, position) {
    let square = new Square(position[0], position[0] + position[1] - 1);
    let level = topInfo.top;
    while (level !== null) {
        let levelFound = false;
        for (let si = 0; si < level.squares.length; ++si) {
            if (squareHit(square, level.squares[si])) {
                levelFound = true;
                break;
            }
        }
        if (levelFound) {
            break;
        }
        level = level.lowerLevel;
    }
    let newHeight = level.height + position[1];
    while (level !== null && newHeight > level.height) {
        level = level.upperLevel;
    }
    if (level === null) {
        let newLevel = new Level(newHeight);
        newLevel.squares.push(square);
        newLevel.lowerLevel = topInfo.top;
        topInfo.top.upperLevel = newLevel;
        topInfo.top = newLevel;
    } else if (newHeight === level.height) {
        let si = 0;
        while (si < level.squares.length && square.right > level.squares[si].left) {
            ++si;
        }
        level.squares.splice(si, 0, square);
    } else {
        // newHeight < level.height
        let newLevel = new Level(newHeight);
        newLevel.squares.push(square);
        newLevel.upperLevel = level;
        newLevel.lowerLevel = level.lowerLevel;
        newLevel.lowerLevel.upperLevel = newLevel;
        level.lowerLevel = newLevel;
    }
    return topInfo.top.height;
}

function squareHit(newSquare, oldSquare) {
    return newSquare.left >= oldSquare.left && newSquare.left <= oldSquare.right ||
        newSquare.right >= oldSquare.left && newSquare.right <= oldSquare.right ||
        oldSquare.left >= newSquare.left && oldSquare.left <= newSquare.right;
}

module.exports = fallingSquares;