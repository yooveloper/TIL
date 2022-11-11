# Pre-render 와 SEO

pre-render
hydrate
seo

ssg 는 빌드 타임에 pre-render
ssr은 요청 타임에 pre-render

### ssg의 2가지 상황
- page의 내용물이 외부 데이터에 의존적인 상황
  - getStaticProps만 가지고 가능
- page의 path까지 외부 데이터에 의존적인 상황
  - getStaticPaths 도 함께 활용해야 가능
  
### Layouts
- 여러 페이지들의 공통 처리


next js 란

프레임워크 vs 라이브러리

Pages > auto routing
- Next.js의 Router는 file-system 기반
- 파일을 만들면 그 파일명이 url과 그대로 매핑이 된다.
- pages/ 혹은 src/pages/ 내에 파일을 만들면 됨
- pages/ 폴더가 존재하면 src/ 안에 있는 pages/ 폴더는 무시가 된다.


fast refresh
api
페이지를 그리는 방식 > SSR / CSR / SSG / ISR
Pre-rendering
SSG vs SSR
Layout
Images


