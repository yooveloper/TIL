{
  const obj = {
    name: "kim",
  };
  obj.name; // kim
  obj["name"]; // kim

  // 타입도 인덱스를 사용가능
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  // Animal 타입의 name이라는 key의 타입을 Name 변수의 타입으로 설정함. 즉 string
  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'

  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "kim",
    gender: "male",
  };
}
