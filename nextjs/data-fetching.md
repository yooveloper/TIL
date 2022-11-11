
## SSR

next.js에서 ssr방식으로 데이터 페칭 시에는
아래 기능을 사용한다.
### getServerSideProps
- 서버단에서 데이터를 가져와서 페이지에 props로 전달한다.

## CSR
next.js에서 CSR을 담당하는 함수는 따로 없다.
기존 react에서 처럼 데이터 패칭하면 됨.


## SSG(Static-Site Generation)
- 정적인 사이트를 생성한다.
- getStaticProps(getStaticPaths)
  - 빌드를 할때 빌드타임에 이미 정적페이지를 생성한다.
  - 정적인 페이지들은 SSG를 쓰는게 훨씬 효율적이다.
  - yarn dev 로는 SSR처럼 동작한다.
  
### ISR(Incremental Static Regeneration)
- 특정 주기로 데이터를 가져와서 화면을 다시 그린다.
- getStaticProps 에 revalidate 프로퍼티로 시간을 설정해주면 해당 주기에 맞춰서 페이지를 한번 더 업데이트 한다.