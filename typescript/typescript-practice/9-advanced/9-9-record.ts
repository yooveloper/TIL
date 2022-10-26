// Map 처럼 서로 엮고 싶을때 사용하는데
type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

// nav 객체는 Page의 타입을 key로 하고 각 key마다 PageInfo의 type을 가진다.
const nav: Record<Page, PageInfo> = {
  home: {
    title: "Home",
  },
  about: {
    title: "About",
  },
  contact: {
    title: "contact",
  },
};
