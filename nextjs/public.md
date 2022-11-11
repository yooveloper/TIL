# public

public 폴더는 정적 리소스를 Next.js로 서빙하기 위한 디렉토리

## robots.txt

- 웹 크롤러 또는 검색엔진이 정보 수집을 해도 되는 페이지와 하면 안되는 페이지를 알려주는 역할을 하는 텍스트 파일이다.
- 크롤러가 웹사이트에 접속하여 정보수집을 위해 보내는 request로 인해 사이트가 과부화 되는것을 방지하기 위해 사용된다.
- SEO 측면에서 robots.txt를 적용해야 하는 이유
  - 크롤러의 과도한 요청으로 인한 과부하 방지
  - 검색엔진 크롤러의 일일 요청 수를 뜻하는 크롤 버짓 낭비 방지
  - 검색엔진에게 sitemap.xml의 위치를 제공하여 웹사이트 콘텐츠가 검색엔진에게 더 잘 발견될 수 있도록 한다.

## robots.txt 작성하기

robots 는 기본적으로 두 가지의 정보를 포함한다.

- User-agent : 어떤 검색엔진 크롤러를 지정할 것인지
- Disallow: 어떤 디렉토리를 제한할 것인지

### robots.txt를 구성하는 네가지 요소

모든 구성 요소를 포함할 필요는 없지만 User-agent는 반드시 포함되어야 한다.

1. User-agent : robots.txt 에서 지정하는 크롤링 규칙이 적용되어야 할 크롤러를 지정한다.
2. Allow : 크롤링을 허용할 경로
3. Disallow : 크롤링을 제한할 경로
4. Sitemap : 사이트맵이 위치한 경로의 전체 URL

## 업로드

robots.txt 파일은 반드시 웹사이트의 루트 디렉토리(www.example.com/ 첫번쪠 "/" 바로 뒤)에 업로드 되어야 한다.

## Images

- public/images 폴더 내에 정적 이미지를 올린 후 Iamge 태그를 활용하여 접근 가능하다.

```js
<img src="/images/profile.png" />
또는
<Image src="/images/profile.png" />
```
