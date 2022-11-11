# Image Component

Next.js 에서 제공해주는 Image 컴포넌트의 장점

- Resizing(responsive 사이즈)
- Lazy load(viewport에 들어오면 로드)
- 그 외 optimization(webp 형태)
  - webp : 구글에서 만든 이미지 형식으로 최적화된 이미지 포맷 제공

## CLS(Cumulative Layout Shift) : 누적 레이아웃 이동

Next.js 의 Image 컴포넌트는 CLS 를 최대한 없애는게 목적이다.

### CLS란 ?

- 컴포넌트가 없다가 생기거나 컴포넌트의 사이즈가 변경 되었을때
  DOM 트리에 있는 컴포넌트들이 re-render 되는 상황

Layout Shift가 자주 일어나는 상황은 웹사이트 최적화에 반하는 것이기 때문에 사전에 미리 이미지 컴포넌트의 width와 height를 지정해줘서 컴포넌트의 크기를 예측해서 미리 잡아두는 형태로 최적화를 진행한다.
