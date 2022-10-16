// 함수 제네릭

{
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const result = checkNotNull(123);
  console.log(result);
  checkNotNull(null);

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result2 = checkNotNullAnyBad(123);

  function checkNotNull2<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNull2(123);
  const boal: boolean = checkNotNull2(true);
}
