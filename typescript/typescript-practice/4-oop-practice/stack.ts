// 스택 구현해보기

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("Stack is Full !");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
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

const stack = new StackImpl(2);
stack.push("yoo 1");
stack.push("kim 2");
stack.push("park 3");

while (stack.size !== 0) {
  console.log(stack.pop());
}

// stack.pop(); // error 발생
