type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

// 😜 only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// 😆 Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; // string

// interface ?
// 누군가가 가져다 구현하기 위한 일종의 규격사항

// types ?
// 구현 목적이 아닌 데이터를 담을 목적으로 사용한다면 interface 보다 type을 쓰는게 낫다.
