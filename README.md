## 리액트 디자인 패턴 및 구현 방법
이 저장소는 리액트의 디자인 패턴과 구현 기술을 학습하기 위한 가이드 역할을 합니다. 컴포넌트, 훅, 상태 관리, 도구, 그리고 최신 프론트엔드 개발의 모범 사례를 중심으로 구성되어 있습니다. 효율적이고 확장 가능하며 유지보수가 쉬운 애플리케이션을 다양한 도구와 라이브러리를 활용하여 구현하는 방법을 탐구합니다.

### 주요 기술 및 도구
이 저장소는 최신 리액트 개발에서 자주 사용되는 다음의 주요 기술 및 패턴을 다룹니다:

* `Tailwind CSS`: 반응형이고 사용자 정의가 용이한 UI 디자인을 위한 유틸리티 중심 CSS 프레임워크.
* `Next.js`: 서버 사이드 렌더링 및 정적 사이트 생성을 지원하는 리액트 프레임워크.
* `TypeScript`: 타입 체크를 통해 개발 효율성을 높이고 리팩토링을 개선하며 버그를 줄이는 JavaScript의 정적 타입 상위 집합.
* `DOM 제어`: 리액트 환경에서 DOM을 이해하고 효율적으로 업데이트하며 성능을 최적화하는 방법.
* `Recoil`: Atom과 Selector를 활용하여 글로벌 상태를 간단하고 유연하게 관리할 수 있는 React 상태 관리 라이브러리.
* `React-Query`: Next.js와 React-Query 간의 통합.

## 적용된 디자인 패턴
#### 컨테이너와 HOC 컴포넌트
로직, 상태 관리, 데이터 페칭을 처리하는 컴포넌트. 컴포넌트를 입력으로 받아 새로운 컴포넌트를 반환하는 함수. 컨테이너 컴포넌트 간 공통 로직을 공유하는 데 유용합니다.
* `component/common/CommonComps.tsx/RQ_FetchContainer`
* `component/common/CommonComps.tsx/VANILA_FetchContainer`
#### 프레젠테이셔널 컴포넌트
렌더링과 UI에만 집중하는 컴포넌트. 보통 상태가 없으며, 컨테이너로부터 전달된 props를 기반으로 동작합니다.
* `component/common/CommonComps.tsx/Presenter`
#### 프롭스를 통한 렌더링
로직을 컴포넌트 간에 공유하기 위해 렌더링 함수를 props로 전달하는 패턴.
* `component/common/CommonComps.tsx/ListRenderer`
* `component/common/CommonComps.tsx/PresenterList`
#### 로직 분리를 위한 후크
커스텀 훅(useFetch, useUsers)을 사용하여 상태와 로직을 캡슐화하고 컴포넌트를 간결하게 유지합니다.
* `component/common/FeatureComps.tsx/EffectComp`
* `utils/hook/ReusableHook.ts`
#### 모듈러 Tailwind CSS
Tailwind CSS의 적용하기 위한 코드를 용도에 따라 모듈화 하여 더 나은 유지보수, 작성을 가능하게 하는 패턴.
* `component/common/CommonComps.tsx/Component`
* `component/styles/TailProperties.ts`
#### 사용자 정의 SCSS 라이브러리와 Tailwind CSS 간의 통합
Tailwind CSS와 사용자 정의 SCSS 라이브러리를 구조적으로 통합.
* `styles/index.scss`
#### 애니메이션 트리거를 위한 ObserverAPI 컨테이너
ObserverAPI를 활용하여 애니메이션을 트리거하는 Render Props 디자인 패턴. Tailwind CSS/SCSS와 통합.
* `component/common/Observer.tsx/ObserverContainer`
* `/styles/_animation.scss`

---

## React Design Patterns & Implementation Methods
This repository serves as a study guide for design patterns and implementation techniques in React. It focuses on various aspects such as React components, hooks, states, tools, and best practices in modern front-end development. You'll explore how to create efficient, scalable, and maintainable React applications using various tools and libraries.

### Key Technologies & Tools
This repository covers the following key technologies and patterns commonly used in modern React development:

* `Tailwind CSS`: Utility-first CSS framework for building responsive and customizable UI designs.
* `Next.js`: A React framework for building server-side rendered (SSR) and statically generated (SSG) web applications.
* `TypeScript`: A statically typed superset of JavaScript that enhances development by adding type checking, improving refactoring, and reducing bugs.
* `DOM Control`: Understanding and manipulating the DOM in a React environment, handling updates efficiently, and optimizing performance.
* `Recoil`: A state management library for React that provides a simple and flexible way to manage global state using atoms and selectors.
* `React-Query`: Integrating between Next.js and React-Query.

## Applied Design Patterns
#### Container/HOC Component
Handles the logic, state management, and data fetching. A function that takes a component and returns a new component. Useful for sharing common logic between container components.
* `component/common/CommonComps.tsx/RQ_FetchContianer`
* `component/common/CommonComps.tsx/VANILA_FetchContainer`
#### Presentational Component
Focuses purely on the rendering and UI. It is typically stateless and relies on props passed down from the container.
* `component/common/CommonComps.tsx/Presenter`
#### Render Props
A pattern where a function is passed as a prop to share logic between components.
* `component/common/CommonComps.tsx/ListRenderer`
* `component/common/CommonComps.tsx/PresenterList`
#### Hooks for Separation
Using custom hooks (useFetch, useUsers) to encapsulate state and logic, while keeping components clean.
* `component/common/FeatureComps.tsx/EffectComp`
* `utils/hook/ReusableHook.ts`
#### Modular Tailwind CSS
A pattern for modularizing Tailwind CSS code based on usage, enabling better maintainability and development efficiency.
* `component/common/ObserverContainer.tsx/CommonComponent`
* `component/styles/TailProperties.ts`
#### Integration with Custom SCSS Library and Tailwind CSS
Structurally integrates Tailwind CSS with a custom SCSS library.
* `styles/index.scss`
#### ObserverAPI Container to Trigger Animation
Render props design pattern applied to observerAPI to trigger animation, intergrating with Tailwind CSS/SCSS
* `component/common/ObserverContainer.tsx/ObserverContainer`
* `/styles/_animation.scss`