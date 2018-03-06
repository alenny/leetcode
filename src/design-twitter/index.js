const LATEST_NUMBER = 10;

class Twitter {
    constructor() {
        this.followMap = new Map();
        this.allTweets = [];
        this.userTweetMap = new Map();
        this.postMap = new Map();
    }
    /**
    * Compose a new tweet. 
    * @param {number} userId 
    * @param {number} tweetId
    * @return {void}
    */
    postTweet(userId, tweetId) {
        this.follow(userId, userId);
        let tweetSerialId = this.allTweets.push(tweetId) - 1;
        let posts = this.postMap.get(userId);
        if (!posts) {
            this.postMap.set(userId, [tweetSerialId]);
        } else {
            posts.push(tweetSerialId);
        }
        let followers = this.followMap.get(userId);
        for (let follower of followers) {
            let userTweets = this.userTweetMap.get(follower);
            if (!userTweets) {
                this.userTweetMap.set(follower, [tweetSerialId]);
            } else {
                userTweets.push(tweetSerialId);
            }
        }
    }
    /**
    * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
    * @param {number} userId
    * @return {number[]}
    */
    getNewsFeed(userId) {
        let tweets = this.userTweetMap.get(userId);
        if (!tweets) {
            return [];
        }
        let ret = [];
        for (let i = tweets.length - 1; i >= Math.max(0, tweets.length - LATEST_NUMBER); --i) {
            ret.push(this.allTweets[tweets[i]]);
        }
        return ret;
    }
    /**
     * Follower follows a followee. If the operation is invalid, it should be a no-op. 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        let followerSet = this.followMap.get(followeeId);
        if (followerSet && followerSet.has(followerId)) {
            return;
        }
        if (!followerSet) {
            followerSet = new Set();
            this.followMap.set(followeeId, followerSet);
        }
        followerSet.add(followerId);
        let followerTweets = this.userTweetMap.get(followerId);
        let posts = this.postMap.get(followeeId);
        this.userTweetMap.set(followerId, this.mergeTweets(followerTweets, posts));
    }
    /**
    * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
    * @param {number} followerId 
    * @param {number} followeeId
    * @return {void}
    */
    unfollow(followerId, followeeId) {
        if (followerId === followeeId) {
            return; // not to remove self
        }
        let followerSet = this.followMap.get(followeeId);
        if (!followerSet || !followerSet.has(followerId)) {
            return;
        }
        followerSet.delete(followerId);
        let followerTweets = this.userTweetMap.get(followerId);
        let posts = this.postMap.get(followeeId);
        this.userTweetMap.set(followerId, this.removeTweets(followerTweets, posts));
    }
    mergeTweets(t1, t2) {
        let i1 = 0, i2 = 0;
        let ret = [];
        while (t1 && i1 < t1.length && t2 && i2 < t2.length) {
            ret.push(t1[i1] < t2[i2] ? t1[i1++] : t2[i2++]);
        }
        while (t1 && i1 < t1.length) {
            ret.push(t1[i1++]);
        }
        while (t2 && i2 < t2.length) {
            ret.push(t2[i2++]);
        }
        return ret;
    }
    removeTweets(from, tweetsToRemove) {
        let fi = 0, ti = 0;
        let ret = [];
        while (fi < from.length && ti < tweetsToRemove.length) {
            if (from[fi] === tweetsToRemove[ti]) {
                ++fi;
                ++ti;
            } else if (from[fi] < tweetsToRemove[ti]) {
                ret.push(from[fi++]);
            } else {
                ++ti;
            }
        }
        while (fi < from.length) {
            ret.push(from[fi++]);
        }
        return ret;
    }
};

module.exports = Twitter;