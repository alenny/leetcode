/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
    if (!image || image.length === 0 || image[0].length === 0 || sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) {
        return image;
    }
    let visited = new Array(image.length);
    for (let i = 0; i < image.length; ++i) {
        visited[i] = new Array(image[0].length);
        visited[i].fill(false);
    }
    floodHelper(image, visited, sr, sc, image[sr][sc], newColor);
    return image;
};

function floodHelper(image, visited, r, c, oldColor, newColor) {
    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || visited[r][c] || image[r][c] !== oldColor) {
        return;
    }
    image[r][c] = newColor;
    visited[r][c] = true;
    floodHelper(image, visited, r - 1, c, oldColor, newColor);
    floodHelper(image, visited, r + 1, c, oldColor, newColor);
    floodHelper(image, visited, r, c - 1, oldColor, newColor);
    floodHelper(image, visited, r, c + 1, oldColor, newColor);
}

module.exports = floodFill;