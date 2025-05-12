import HistoyIcon from '@/components/ui/icon/HistoyIcon';
import InfoIcon from '@/components/ui/icon/InfoIcon';
import ProjectIcon from '@/components/ui/icon/ProjectIcon';
import SkillIcon from '@/components/ui/icon/SkillIcon';
import SparkleIcon from '@/components/ui/icon/SparkleIcon';

export const languageLogos = [
  { label: 'JavaScript', src: 'img/logo/javascript-icon.svg' },
  { label: 'TypeScript', src: 'img/logo/typescript-icon.svg' },
  { label: 'HTML', src: 'img/logo/html-icon.svg' },
  { label: 'CSS', src: 'img/logo/css-icon.svg' },
];

export const frontendLogos = [
  { label: 'React', src: 'img/logo/react-icon.svg' },
  { label: 'Next.js', src: 'img/logo/nextjs-icon.svg' },
];

export const stylingLogos = [
  { label: 'Tailwind CSS', src: 'img/logo/tailwind-icon.svg' },
  { label: 'Styled Components', src: 'img/logo/styled-components-icon.png' },
  { label: 'Material UI', src: 'img/logo/material-ui-icon.svg' },
  { label: 'shadcn/ui', src: 'img/logo/shadcn-icon.svg' },
];

export const stateManagementLogos = [
  { label: 'Context API', src: 'img/logo/react-icon.svg' },
  { label: 'Redux', src: 'img/logo/redux-icon.svg' },
  { label: 'Recoil', src: 'img/logo/recoil-icon.svg' },
  { label: 'React Query', src: 'img/logo/react-query-icon.svg' },
];

export const backendToolLogos = [
  { label: 'Axios', src: 'img/logo/axios-icon.svg' },
  { label: 'Firebase', src: 'img/logo/firebase-icon.svg' },
  { label: 'Supabase', src: 'img/logo/supabase-icon.svg' },
  { label: 'NextAuth.js', src: 'img/logo/nextauth-icon.png' },
];

export const toolLogos = [
  { label: 'GitHub', src: 'img/logo/github-icon.svg' },
  { label: 'Figma', src: 'img/logo/figma-icon.svg' },
  { label: 'Notion', src: 'img/logo/notion-icon.svg' },
];

export const navigationTabs = [
  { label: '소개', targetId: 'info', icon: InfoIcon },
  { label: '핵심 가치', targetId: 'values', icon: SparkleIcon },
  // { label: '이력', targetId: 'history', icon: HistoyIcon },
  { label: '기술', targetId: 'skills', icon: SkillIcon },
  { label: '프로젝트', targetId: 'project', icon: ProjectIcon },
];

export const skillsList = [
  {
    title: '프론트엔드 기술',
    items: languageLogos,
    desc: (
      <>
        모던 HTML, CSS, Javascript로 아날로그 사이트를 쉽게 만들 수 있으며 <b>Typescript를 통한 타입 관리</b>에
        익숙합니다.
      </>
    ),
  },
  {
    title: '프레임워크/라이브러리',
    items: frontendLogos,
    desc: (
      <>
        React를 이용한 CSR 웹 프론트엔드 개발에 익숙하며, <b>재사용 가능한 컴포넌트</b>를 작성하고자 합니다.
        <br />
        Next.js와 Typescript를 사용한 SSR 개발 경험이 다수 있습니다.
      </>
    ),
  },
  {
    title: '스타일링 도구',
    items: stylingLogos,
    desc: (
      <>
        Tailwind와 Styled Components를 사용해 보았으며 <b>유틸리티 기반 CSS 프레임워크</b>에 익숙합니다.
        <br />
        MUI와 Shadcn을 사용하여 커스터마이징 가능한 웹 UI를 <b>빠르게 구현할 수 있습니다.</b>
      </>
    ),
  },
  {
    title: '상태 관리',
    items: stateManagementLogos,
    desc: (
      <>
        모던 리액트에서 Context API로 상태 관리를 할 수 있으며, 대규모 프로젝트에서 <b>Props drilling</b>을 피하기 위해
        전역 상태 관리 라이브러리들을 사용할 수 있습니다.
      </>
    ),
  },
  {
    title: '개발 라이브러리',
    items: backendToolLogos,
    desc: (
      <>
        Axios를 이용하여 API 통신 로직을 작성할 수 있으며, Firebase, Supabase 를 활용하여
        <b>별도 백엔드 없이 페이지를 구축할 수 있습니다.</b>
        <br />
        NextAuth.js를 통하여 SSR 환경에서의 <b>인증 흐름</b>을 구현할 수 있습니다.
      </>
    ),
  },
  {
    title: '협업 툴',
    items: toolLogos,
    desc: (
      <>
        GitHub 기반으로 협업 워크플로우를 작성하는 데 익숙하며,
        <b>Figma로 디자인된 페이지를 쉽게 퍼블리싱할 수 있습니다.</b>
        <br />
        노션, 슬랙과 같은 협업 도구를 익숙하게 사용할 수 있습니다.
      </>
    ),
  },
];

export const blogContents = [
  {
    image:
      'https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3HkSl%2FbtsKFnCExdX%2FSWHTXxdgSCeSpPq3RqX8PK%2Fimg.png',
    title: '[React] react-js-pagination를 이용한 페이지네이션(Pagination) 구현',
    link: 'https://pom-pomm.tistory.com/27',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3HkSl%2FbtsKFnCExdX%2FSWHTXxdgSCeSpPq3RqX8PK%2Fimg.png',
    title: '[React] react-js-pagination를 이용한 페이지네이션(Pagination) 구현',
    link: 'https://pom-pomm.tistory.com/27',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3HkSl%2FbtsKFnCExdX%2FSWHTXxdgSCeSpPq3RqX8PK%2Fimg.png',
    title: '[React] react-js-pagination를 이용한 페이지네이션(Pagination) 구현',
    link: 'https://pom-pomm.tistory.com/27',
  },
];

export const gitHubLink = 'https://github.com/yunchyn';
export const blogLink = 'https://pom-pomm.tistory.com/';
