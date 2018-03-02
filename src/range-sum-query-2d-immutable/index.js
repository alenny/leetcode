class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.sumMatrix = new Array(matrix.length);
        if (matrix.length > 0 && matrix[0].length > 0) {
            this.sumAllFromTopLeft(matrix);
        }
    }
    /** 
     * @param {number} row1 
     * @param {number} col1 
     * @param {number} row2 
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return this.sumMatrix[row2][col2] - (row1 > 0 ? this.sumMatrix[row1 - 1][col2] : 0) - (col1 > 0 ? this.sumMatrix[row2][col1 - 1] : 0) + (row1 > 0 && col1 > 0 ? this.sumMatrix[row1 - 1][col1 - 1] : 0);
    }
    sumAllFromTopLeft(matrix) {
        this.sumMatrix[0] = new Array(matrix[0].length);
        this.sumMatrix[0][0] = matrix[0][0];
        for (let c = 1; c < matrix[0].length; ++c) {
            this.sumMatrix[0][c] = this.sumMatrix[0][c - 1] + matrix[0][c];
        }
        for (let r = 1; r < matrix.length; ++r) {
            this.sumMatrix[r] = new Array(matrix[0].length);
            this.sumMatrix[r][0] = this.sumMatrix[r - 1][0] + matrix[r][0];
            for (let c = 1; c < matrix[0].length; ++c) {
                this.sumMatrix[r][c] = this.sumMatrix[r - 1][c] + this.sumMatrix[r][c - 1] - this.sumMatrix[r - 1][c - 1] + matrix[r][c];
            }
        }
    }
}

module.exports = NumMatrix;

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */