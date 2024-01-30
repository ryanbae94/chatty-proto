### 구조

- 해당 페이지 혹은 컴포넌트에서만 사용되는 컴포넌트는 `_component` 폴더에 넣기
- 스타일은 styles 폴더안에. 해당 컴포넌트 명을 `camelCase`로 작성
- types, mocks 등 컴포넌트가 아닌 것들은 `app/src` 밑에 `(_)folder` 형식으로 작성
- 각 페이지들은 도메인 별로 묶어서 `app/src` 밑에 `(domain)/페이지이름` 폴더 만들어서 작성

### svg 사용

- svg를 조작해야할 필요가 있으면 `svgr`을 활용해서 컴포넌트로 불러옴. 이 때 필요한 것들은 `src/assets/icons`안에 넣기
- 조작할 필요 없는 svg는 `public/images`안에 넣고, 불러올 때는 `next/image`를 활용해 `<Image src='path' />` 형식으로 활용

### 실행

```bash
npm i
npm run dev
```
