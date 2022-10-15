/**
 * Enum
 */

// JavsScript 에서 상수 정의할때
const MAX_NUM = 6;
const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
const dayOfToday = DAYS_ENUM.MONDAY;

// TypeScript
enum Days {
  Monday, // 0
  TuesDay, // 1
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday = "일요일",
}
// enum에 값을 지정하지 않으면 0부터 순차적으로 증가함
console.log(Days.Wednesday);
console.log(Days.Sunday);

// enum 을 쓰면 타입이 보장되지 않음
let day: Days = Days.Sunday;
day = 10;
console.log(day); // fu#king error

// 하지만 유니온 타입을 사용하면~
type DaysOfWeek = "Monday" | "Tuesday" | "WednesDay" | "Thursday";

let dayOfweek: DaysOfWeek = "Monday";
dayOfweek = 0; // error
