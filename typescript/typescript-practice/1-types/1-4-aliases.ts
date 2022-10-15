/**
 * Type Aliases
 */

type Text = string;
const name: Text = "kim";
const address: Text = "seoul";
type Num = number;
type Student = {
  name: string;
  age: number;
};

const students: Student = {
  name: "kim",
  age: 12,
};

/**
 * String Literal Types
 */
// 선언된 문자열만 값으로 할당할수있음.
type Name = "name";
let myName: Name;
myName = "wonyoung";
