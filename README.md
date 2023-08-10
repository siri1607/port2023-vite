# 포트폴리오 사이트 만들기 프로젝트

하나의 웹사이트를 여러가지 프레임워크를 사용해 만들어본다.
웹 개발자들은 다양한 프레임워크를 이용해 작업한다.
여러가지 프레임워크들을 어떻게 적용하는지, 각 프레임워크들의 장단점을 비교 분석해 본다.

1. [vite](https://github.com/siri1607/port2023-vite)를 이용하여 사이트를 제작
2. [react.js](https://github.com/siri1607/port2023-react)를 이용하여 사이트를 제작
3. [vue.js](https://github.com/siri1607/port2023-vue)를 이용하여 사이트를 제작
4. [next.js](https://github.com/siri1607/port2023-next)를 이용하여 사이트를 제작

## 완성작 보기
미리보기:

## 사용 스펙
- vite(https://ko.vitejs.dev/) 를 사용해 사이트를 번들링하고 관리
- gsap(https://greensock.com/gsap) 를 이용하여 패럴랙스 효과 구현
- lenis(https://lenis.studiofreight.com/) 를 이용해 스무스 효과 구현
- netlify(https://www.netlify.com/) 를 통해 배포
- git(https://github.com/) 을 사용하여 파일을 관리
- HTML, CSS 기반으로 웹사이트 기본 레이아웃을 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업한다.[ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행
- vite를 설치 `npm create vite@latest`
- gsap를 설치 `npm install gsap`
- lenis를 설치 `npm install @studio-freight/lenis`
- vite를 설치 후 환경설정, "vite.config.js" 파일을 만들고 아래와 같이 작성
```javascript
export default {
    root: "src",
    build: {
        outDir: "../public",
    },
}