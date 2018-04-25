class Region {
    constructor() {
        this.oneNodes = [];
        this.boundarySet = new Set();
        this.wallCount = 0;
    }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
const containVirus = function (grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let wallCount = 0, regions;
    while ((regions = findAllRegions(grid)).length > 0) {
        let mostIdx = 0;
        for (let i = 1; i < regions.length; ++i) {
            if (regions[i].boundarySet.size > regions[mostIdx].boundarySet.size) {
                mostIdx = i;
            }
        }
        wallCount += buildWallForRegion(grid, regions[mostIdx]);
        for (let i = 0; i < regions.length; ++i) {
            if (i !== mostIdx) {
                infect(grid, regions[i]);
            }
        }
    }
    return wallCount;
};

function infect(grid, region) {
    for (let key of region.boundarySet.keys()) {
        let parts = key.split(',');
        grid[Number.parseInt(parts[0])][Number.parseInt(parts[1])] = 1;
    }
}

function buildWallForRegion(grid, region) {
    region.oneNodes.forEach(node => grid[node[0]][node[1]] = 2);
    return region.wallCount;
}

function findAllRegions(grid) {
    let regions = [];
    let rows = grid.length, cols = grid[0].length;
    let visited = new Array(rows);
    for (let r = 0; r < rows; ++r) {
        visited[r] = [];
    }
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            if (visited[r][c] || grid[r][c] !== 1) {
                continue;
            }
            let region = new Region();
            findHelper(grid, visited, r, c, region);
            regions.push(region);
        }
    }
    return regions;
}

function findHelper(grid, visited, r, c, region) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || visited[r][c] || grid[r][c] === 2) {
        return;
    }
    if (grid[r][c] === 0) {
        ++region.wallCount;
        region.boundarySet.add(r + ',' + c);
        return;
    }
    visited[r][c] = true;
    region.oneNodes.push([r, c]);
    findHelper(grid, visited, r - 1, c, region);
    findHelper(grid, visited, r + 1, c, region);
    findHelper(grid, visited, r, c - 1, region);
    findHelper(grid, visited, r, c + 1, region);
}

module.exports = containVirus;