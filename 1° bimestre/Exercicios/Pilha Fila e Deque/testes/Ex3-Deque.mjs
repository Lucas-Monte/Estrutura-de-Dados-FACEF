import Deque from "../lib/Deque.mjs";

let deque = new Deque;

deque.insertBack(5);
deque.insertFront(5);
deque.insertBack(9);
deque.insertBack(1);
deque.insertFront(3);
deque.insertBack(78);


console.log(deque.print());