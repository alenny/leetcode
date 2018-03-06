/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
class DestinationInfo {
    constructor() {
        this.sortedDestinations = null;
        this.destMap = new Map();
    }
    sortDestinations() {
        this.sortedDestinations = Array.from(this.destMap.keys());
        this.sortedDestinations.sort();
    }
}

const findItinerary = function (tickets) {
    let map = new Map();
    for (let ticket of tickets) {
        let destInfo = map.get(ticket[0]);
        if (!destInfo) {
            destInfo = new DestinationInfo();
            map.set(ticket[0], destInfo);
        }
        let count = destInfo.destMap.get(ticket[1]);
        destInfo.destMap.set(ticket[1], count ? count + 1 : 1);
    }
    for (let destInfo of map.values()) {
        destInfo.sortDestinations();
    }
    return findHelper(tickets.length, map, 'JFK');
};

function findHelper(ticketCount, map, start) {
    if (ticketCount === 0) {
        return [start];
    }
    let destInfo = map.get(start);
    if (!destInfo) {
        return null;
    }
    for (let dest of destInfo.sortedDestinations) {
        let ticketsLeft = destInfo.destMap.get(dest);
        if (ticketsLeft === 0) {
            continue;
        }
        destInfo.destMap.set(dest, ticketsLeft - 1);
        let result = findHelper(ticketCount - 1, map, dest);
        if (result) {
            return [start].concat(result);
        }
        destInfo.destMap.set(dest, ticketsLeft);
    }
    return null;
}

module.exports = findItinerary;