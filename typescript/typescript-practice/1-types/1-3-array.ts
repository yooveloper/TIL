// Array
const fruits: string[] = ["🍅", "🍌"];
const scores: Array<number> = [1, 2, 3];

// readonly 붙힐 경우 절대 변경 불가능
function printArray(fruits: readonly string[]) {
  //  fruits.push('peach') // error
}

// Tuple
// 배열이긴 배열인데 서로 다른 타입을 함께 가질 수 있는 배열
// 튜플은 사용 권장 x
// Tuple -> interface, type alias, class 등으로 대체해서 사용
let student: [string, number];
student = ["name", 123];
student[0]; // 'name'
student[1]; // 123

// 리액트의 useState 훅이 Tuple 의 형태임
// const [ count, setCount ] = useState(0);
