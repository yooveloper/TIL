{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 정보를 은닉할수있는 방법으로는
  // public -> 외부에서 접근 가능
  // private -> 외부에서 접근 불가
  // protected -> 상속받은 자식클래스만 접근 가능
  // 따로 지정하지 않으면 기본적으로 public
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; // instance(object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // 외부에서 내부의 값을 변경하기 위한 메서드
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -34; // 외부에서 class 의 object 상태를 유효하지않은 상태로 만들수있는건 잘못 되었음.

  maker.fillCoffeeBeans(12);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error("invalid");
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User("Steve", "Jobs");
  console.log(user.fullName);

  user.age = 6;
  console.log(user.age);
}
