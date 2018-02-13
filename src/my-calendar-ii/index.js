class Event {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.next = null;
        this.isDouble = false;
    }
}

class MyCalendarTwo {
    constructor() {
        this.eventHead = new Event(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
    }
    /** 
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    book(start, end, curr) {
        curr = curr || this.eventHead;
        while (curr.next && curr.next.end <= start) {
            curr = curr.next;
        }
        if (!curr.next) {
            curr.next = new Event(start, end);
            return true;
        }
        let newEvent;
        if (curr.next.start >= end) {
            newEvent = new Event(start, end);
            newEvent.next = curr.next;
            curr.next = newEvent;
            return true;
        }
        if (curr.next.isDouble) {
            return false;
        }
        let old = curr.next;
        if (end > old.end && !this.book(old.end, end, old)) {
            return false;
        }
        if (old.start !== start) {
            newEvent = new Event(Math.min(old.start, start), Math.max(old.start, start));
            curr.next = newEvent;
            curr = newEvent;
        }
        newEvent = new Event(Math.max(old.start, start), Math.min(old.end, end));
        newEvent.isDouble = true;
        curr.next = newEvent;
        curr = newEvent;
        if (old.end > end) {
            newEvent = new Event(end, old.end);
            curr.next = newEvent;
            curr = newEvent;
        }
        curr.next = old.next;
        return true;
    }
};

module.exports = MyCalendarTwo;

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarTwo).createNew()
 * var param_1 = obj.book(start,end)
 */