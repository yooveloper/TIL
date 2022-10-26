{
  // 불변성을 보장하기 위한 readonly 타입을 알아보자.

  type ToDo = {
    title: string;
    description: string;
  };

  // 불변성이 보장되지 않는 잘못된 방법
  function display(todo: ToDo) {
    todo.title = "haha";
  }

  // Readonly를 적용해서 불변성을 보장
  function displayReadonly(todo: Readonly<ToDo>) {
    // todo.title = "haha"; // error
  }
}
