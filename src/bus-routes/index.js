/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
const numBusesToDestination = function (routes, S, T) {
    let stopToRouteMap = new Map();
    for (let r = 0; r < routes.length; ++r) {
        for (let s = 0; s < routes[r].length; ++s) {
            let col = stopToRouteMap.get(routes[r][s]);
            if (col) {
                col.push(r);
            } else {
                stopToRouteMap.set(routes[r][s], [r]);
            }
        }
    }
    // BFS
    let beginStops = new Set([S]), visitedRoutes = new Set(), visitedStops = new Set([S]), ret = 0;
    while (beginStops.size > 0) {
        if (beginStops.has(T)) {
            break;
        }
        let nextStops = new Set();
        for (let stop of beginStops.keys()) {
            let routeCol = stopToRouteMap.get(stop);
            if (!routeCol) {
                continue;
            }
            for (let route of routeCol) {
                if (visitedRoutes.has(route)) {
                    continue;
                }
                visitedRoutes.add(route);
                routes[route].forEach(s => {
                    if (!visitedStops.has(s)) {
                        nextStops.add(s);
                        visitedStops.add(s);
                    }
                });
            }
        }
        beginStops = nextStops;
        ++ret;
    }
    return beginStops.size === 0 ? -1 : ret;
};

module.exports = numBusesToDestination;