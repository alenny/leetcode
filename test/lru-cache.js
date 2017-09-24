const LRUCache = require('../src/lru-cache');
const assert = require('assert');
describe('lru-cache', function () {
    describe('#LRUCache()', function () {
        it('should a valid LRU cache of capacity 2', function () {
            const cache = new LRUCache(2);
            cache.put(1, 1);
            cache.put(2, 2);
            assert.equal(cache.get(1), 1);
            cache.put(3, 3);
            assert.equal(cache.get(2), -1);
            cache.put(4, 4);
            assert.equal(cache.get(1), -1);
            assert.equal(cache.get(3), 3);
            assert.equal(cache.get(4), 4);
        });
        it('should a valid LRU cache of capacity 1', function () {
            const cache = new LRUCache(1);
            cache.put(2, 1);
            assert.equal(cache.get(2), 1);
            cache.put(3, 2);
            assert.equal(cache.get(2), -1);
            assert.equal(cache.get(3), 2);
        });
    });
});