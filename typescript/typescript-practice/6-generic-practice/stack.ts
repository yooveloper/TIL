// 스택 구현해보기

interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error("Stack is Full !");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    // null == undefined 동일하다고 간주되기 때문에 null 로 확인하는게 낫다.
    if (this.head == null) {
      throw new Error("Stack is empty !");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(4);
stack.push("yoo 1");
stack.push("kim 2");
stack.push("park 3");

while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);

while (stack2.size !== 0) {
  console.log(stack2.pop());
}

// stack.pop(); // error 발생
