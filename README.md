# 밴드 웹사이트

React 기반의 정적 웹사이트입니다. GitHub Pages를 통해 호스팅됩니다.

## 시작하기

### 필수 조건
- Node.js (버전 14 이상)
- npm 또는 yarn

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm start
```
브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드
```bash
npm run build
```

### GitHub Pages에 배포
```bash
npm run deploy
```

## 프로젝트 구조

```
band/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── package.json
└── README.md
```

## 기술 스택

- React 18
- Create React App
- GitHub Pages
- gh-pages (배포용)

## 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다. `npm run deploy` 명령어를 실행하면 `gh-pages` 브랜치에 빌드된 파일이 업로드됩니다.

GitHub 저장소 설정에서 Pages 소스를 `gh-pages` 브랜치로 설정하세요. 