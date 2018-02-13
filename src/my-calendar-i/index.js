class Event {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.next = null;
    }
}

class MyCalendar {
    constructor() {
        this.eventHead = new Event(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
    }
    /** 
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        let curr = this.eventHead;
        while (curr.next != null && curr.next.end <= start) {
            curr = curr.next;
        }
        if (curr.next === null) {
            curr.next = new Event(start, end);
            return true;
        }
        if (curr.next.start < end) {
            return false;
        }
        let newEvent = new Event(start, end);
        newEvent.next = curr.next;
        curr.next = newEvent;
        return true;
    }
};

module.exports = MyCalendar;

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */