{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  // [1, 2].map((item) => item * item); // [1,4]
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "dog",
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReanOnly = {
  //   readonly title?: string;
  //   readonly author?: string;
  //   readonly description?: string;
  // };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  // const obj2: Nullable<Video> = {
  //   title: null,
  //   author: null,
  // };
}
