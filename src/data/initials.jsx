import InfoIcon from '@/components/ui/icon/InfoIcon';
import MailIcon from '@/components/ui/icon/MailIcon';
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
  { label: 'NextAuth', src: 'img/logo/nextauth-icon.png' },
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
  { label: '연락', targetId: 'contact', icon: MailIcon },
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
        Axios를 이용하여 API 통신 로직을 작성할 수 있으며, Firebase, Supabase를 활용하여{' '}
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
        GitHub 기반으로 협업 워크플로우를 작성하는 데 익숙하며,{' '}
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
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIpHYR%2FbtsNOkP2jfl%2FiGizPG5znJKHjW4JMci4qK%2Fimg.png',
    title: '[Next.js] Zod 라이브러리를 이용한 회원가입 Form 유효성 검사 및 에러 메시지 띄우기 (Typescript)',
    link: 'https://pom-pomm.tistory.com/31',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQFUGY%2FbtsJqmGg99a%2FGcM7yWAlOuUdwSbTZwsgBK%2Fimg.png',
    title: '[Next.js] TMDB API를 이용한 영화 앱 (Typescript)',
    link: 'https://pom-pomm.tistory.com/26',
  },
];

export const projectList = [
  {
    title: '스타벅스 스토어 리빌딩',
    badges: ['팀 프로젝트'],
    images: [
      'https://private-user-images.githubusercontent.com/167273902/436890246-b7b7c8c8-af55-47cb-8e30-1877aeb32eb1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcxOTMyOTMsIm5iZiI6MTc0NzE5Mjk5MywicGF0aCI6Ii8xNjcyNzM5MDIvNDM2ODkwMjQ2LWI3YjdjOGM4LWFmNTUtNDdjYi04ZTMwLTE4NzdhZWIzMmViMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwMzIzMTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zOTdhNzFmZjY3NDUyNWYzMTVkMzIwNDhlNTNkZjk2MTE1Zjk4MzVkODhkMjZjNzI0YzA2Y2U0NjVjZDA5ZDIxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Tyw5xcfxSvPoIXjz0BoBpqdisse2-OEp28bSojcolFs',
      'https://dummyimage.com/640x640',
    ],
    period: '2025.03.11. - 2025.4.25.',
    readmeUrl: 'https://github.com/4-javachip',
    contributors: '참여 인원: 5명 (프론트엔드 2명, 백엔드 3명)',
    techStack: ['Typescript', 'Next.js', 'React', 'Tailwind', 'Shadcn/ui', 'Context API', 'Zod', 'NextAuth'],
    desc: (
      <>
        신세계아이앤씨 스파로스 아카데미 6기 교육 중 진행한 1차 프로젝트로, 스타벅스 앱의 온라인 스토어 기능을
        리빌딩하고 개선하는 것을 목표로 하였습니다.
        <span className="font-semibold block pt-4">주요 기능</span>
        인증, 소셜 로그인, 상품 조회 및 필터링, 상품 옵션, 정렬, 검색, 장바구니, 배송지, 찜, 리뷰, 주문/결제
        <span className="font-semibold block pt-4">참여 역할 및 구현 기능</span>
        Auth{' '}
        <span className="text-primary">
          로그인/회원가입, 소셜 로그인/회원가입, 로그아웃, 이메일 인증, 비밀번호 재설정
        </span>
        <br />
        Main <span className="text-primary">이벤트 배너 슬라이드, 상품 캐러셀, 기획전 페이지, 베스트 페이지 </span>
        <br />
        Product{' '}
        <span className="text-primary">
          검색, 무한 스크롤 상품 리스트, 카테고리에 따른 상품 필터링, 상품 상세, 리뷰 페이지, 상품/리뷰 정렬
        </span>
        <br />
        Order <span className="text-primary">리뷰 작성</span>
      </>
    ),
  },
  {
    title: '모동숲 가이드',
    badges: ['개인 프로젝트'],
    images: [
      'https://private-user-images.githubusercontent.com/119782741/443063443-fc92265e-e27a-4e88-88e5-604295251c3b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcxOTIwMDYsIm5iZiI6MTc0NzE5MTcwNiwicGF0aCI6Ii8xMTk3ODI3NDEvNDQzMDYzNDQzLWZjOTIyNjVlLWUyN2EtNGU4OC04OGU1LTYwNDI5NTI1MWMzYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwMzAxNDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNTViNmM1YWMwOTk3ZmFlMjkyMmFjNjhkMTM0YzY0MmY5OGQwZTUwOWUxNmZkNmVjYWVjMDViZmQ5OWVmYzlkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.M9muiXOX1v719WBDDwKFJ57Cj-cqVNgaaSQoHVc2U5Q',
      'https://private-user-images.githubusercontent.com/119782741/443063447-58d34d21-7573-4967-bfd5-96a08dd9b675.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcxOTIwMDYsIm5iZiI6MTc0NzE5MTcwNiwicGF0aCI6Ii8xMTk3ODI3NDEvNDQzMDYzNDQ3LTU4ZDM0ZDIxLTc1NzMtNDk2Ny1iZmQ1LTk2YTA4ZGQ5YjY3NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwMzAxNDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YWMxZjczNGJjNGM4YzRkOWZmZThhZjNjMjQxNzBkODcyZGQyYzJiNDlmMTdmNTlmZmIxNTcxOTE4OTU4Njk5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.GREfMHSgJIrnzE6q0Pj6-131Tv26ETKhGvNFgPM0lFc',
      'https://private-user-images.githubusercontent.com/119782741/443063446-8e885ef3-3e95-4182-8551-1bba7c4a0119.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcxOTIwMDYsIm5iZiI6MTc0NzE5MTcwNiwicGF0aCI6Ii8xMTk3ODI3NDEvNDQzMDYzNDQ2LThlODg1ZWYzLTNlOTUtNDE4Mi04NTUxLTFiYmE3YzRhMDExOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwMzAxNDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZTNkNGU0ZWMyYzk3Njc0NzZjNDMzNjQ2ZTcyMzE1MmIwZjI1ODI0MTUzYjg2MDc4ODk4MTQxMmI2ODkzZjU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.LWK4KOz5Hoa-NdPeR4Y9KlbaR-rl_Trk1Yd08ySv2Aw',
      'https://private-user-images.githubusercontent.com/119782741/443063450-eb193d5f-574f-4db4-9359-92d4fa205833.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcxOTIwMDYsIm5iZiI6MTc0NzE5MTcwNiwicGF0aCI6Ii8xMTk3ODI3NDEvNDQzMDYzNDUwLWViMTkzZDVmLTU3NGYtNGRiNC05MzU5LTkyZDRmYTIwNTgzMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwMzAxNDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iYWE3Mjk0NmNkZTAzZDJjMjc4ZDEwMTY0MTg4MzMyYzkyODU2NzI1YTBkYmE2YmMzNzc0YjUzMTVlNWNhOGVhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.nh7q6B93YjgN87oMnSQDfPbEyKXMgLw7OexHab2r2yc',
      'https://private-user-images.githubusercontent.com/119782741/443063445-b20c97f9-d3de-4737-9a30-00b1888756e5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcxOTIwMDYsIm5iZiI6MTc0NzE5MTcwNiwicGF0aCI6Ii8xMTk3ODI3NDEvNDQzMDYzNDQ1LWIyMGM5N2Y5LWQzZGUtNDczNy05YTMwLTAwYjE4ODg3NTZlNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwMzAxNDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00YzZhZmFkZjZlM2I1NDcxMDNmMGRlNDUwYmQwYzQxZmE3MmI0MWZkYjhhZjE4NWZjNTc2MzFjZWUwMzQ3NGYxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.p5f7wu2lLIEfbO9OlCBxwGPMw7BACzhzN_nOqif-xCk',
    ],
    period: '2024.10.31. - 2025.01.07.',
    siteUrl: 'https://animal-crossing-guide.vercel.app/',
    readmeUrl: 'https://github.com/yunchyn/Animal-crossing-guide',
    contributors: '참여 인원: 1명 (프론트엔드 1명)',
    techStack: ['Javascript', 'React', 'Styled components', 'Axios', 'Framer motion', 'React query', 'Figma', 'Vercel'],
    desc: (
      <>
        게임 '모여봐요 동물의 숲'의 공략 정보와 가이드를 제공하는 사이트로, 오픈 API인 Nookipedia API와 Animal-crossing
        라이브러리를 이용하여 페이지를 구현하였습니다.
        <span className="font-semibold block pt-4">주요 기능</span>
        주민 일람, 생물 도감, 아이템 카탈로그, 레시피 도감, 이벤트 일정, 주민/생물/아이템 상세 페이지, 메인 화면 Todo
        목록, 키워드 검색 및 카테고리 필터링
      </>
    ),
  },
];

export const badgeColorMap = {
  React: { bg: '#A6EAFD', text: '#40434E' },
  'Context API': { bg: '#A6EAFD', text: '#40434E' },
  Typescript: { bg: '#88BBE8', text: '#40434E' },
  Tailwind: { bg: '#85C8F0', text: '#ffffff' },
  'Next.js': { bg: '#455053', text: '#ffffff' },
  NextAuth: { bg: '#455053', text: '#ffffff' },
  Javascript: { bg: '#FBCF7C', text: '#40434E' },
  Spring: { bg: '#6DB33F', text: '#ffffff' },
  'Styled components': { bg: '#F8BBCE', text: '#40434E' },
  'Shadcn/ui': { bg: '#1E2122', text: '#ffffff' },
  Supabase: { bg: '#91D1A3', text: '#40434E' },
  Zod: { bg: '#5c88d0', text: '#000000' },
  Axios: { bg: '#86C5EA', text: '#40434E' },
  'Framer motion': { bg: '#df91ed', text: '#000000' },
  'React query': { bg: '#f4a6a6', text: '#40434E' },
  Figma: { bg: '#ea8686', text: '#ffffff' },
  Vercel: { bg: '#1E2122', text: '#ffffff' },
};

export const gitHubLink = 'https://github.com/yunchyn';
export const blogLink = 'https://pom-pomm.tistory.com/';
