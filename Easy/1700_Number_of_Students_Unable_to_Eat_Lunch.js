/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {

    //enqueue all the students in a queue
    let studentQueue = new Queues();
    let exitCount = 0; //Our exit condition <= so we do not enter infinite loop
    let studentCount = students.length;

    students.forEach(students => {studentQueue.enqueue(students)});

    while(!studentQueue.isEmpty() && exitCount < studentCount){
        if(studentQueue.peek() == sandwiches[0]) {
            studentQueue.dequeue();
            sandwiches.shift();
            exitCount = 0;
        }
        else{
            //we shift student[0] to the back of the queue
            studentQueue.enqueue(studentQueue.dequeue());
            exitCount++;
        }
    }
    return studentQueue.size();
};


/**
Construct a Queue class that handle all the queue related methods
*/
class Queues {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    size(){
        return this.backIndex - this.frontIndex;
    }
    isEmpty(){
        return !(this.backIndex - this.frontIndex);
    }

    get printQueue() {
       const queueArray = [];
        for (let i = this.frontIndex; i < this.backIndex; i++) {
        queueArray.push(this.items[i]);
        }
        return queueArray;
    }
}
