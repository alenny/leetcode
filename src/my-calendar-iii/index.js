class Event {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.next = null;
        this.k = 1;
    }
}

class MyCalendarThree {
    constructor() {
        this.eventHead = new Event(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
        this.k = 1;
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
        let newEvent;
        if (!curr.next) {
            newEvent = new Event(start, end);
            curr.next = newEvent;
            return this.k;
        }
        if (curr.next.start >= end) {
            newEvent = new Event(start, end);
            newEvent.next = curr.next;
            curr.next = newEvent;
            return this.k;
        }
        let old = curr.next;
        if (end > old.end) {
            this.book(old.end, end, old);
        }
        if (old.start !== start) {
            newEvent = new Event(Math.min(old.start, start), Math.max(old.start, start));
            if (old.start < start) {
                newEvent.k = old.k;
            }
            curr.next = newEvent;
            curr = newEvent;
        }
        newEvent = new Event(Math.max(old.start, start), Math.min(old.end, end));
        newEvent.k = old.k + 1;
        this.k = Math.max(this.k, newEvent.k);
        curr.next = newEvent;
        curr = newEvent;
        if (old.end > end) {
            newEvent = new Event(end, old.end);
            newEvent.k = old.k;
            curr.next = newEvent;
            curr = newEvent;
        }
        curr.next = old.next;
        return this.k;
    }
};

module.exports = MyCalendarThree;

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarThree).createNew()
 * var param_1 = obj.book(start,end)
 */