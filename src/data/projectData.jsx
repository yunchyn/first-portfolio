import { ForegroundText, GrayText, SectionTitle } from '@/components/ui/CommonLayouts';

export const projectList = [
  {
    title: '스타벅스 스토어 리빌딩',
    badges: ['팀 프로젝트'],
    images: [
      '/img/slide/starbucks-slide1.png',
      '/img/slide/starbucks-slide2.png',
      '/img/slide/starbucks-slide3.png',
      '/img/slide/starbucks-slide4.png',
      '/img/slide/starbucks-slide5.png',
      '/img/slide/starbucks-slide6.png',
      '/img/slide/starbucks-slide7.png',
    ],
    period: '2025.03.11. - 2025.4.25.',
    readmeUrl: 'https://github.com/4-javachip',
    contributors: '참여 인원: 5명 (프론트엔드 2명, 백엔드 3명)',
    myContribution: '27%',
    techStack: ['Typescript', 'Next.js', 'React', 'Tailwind', 'Shadcn/ui', 'Context API', 'Zod', 'NextAuth'],
    desc: (
      <>
        <p>
          신세계아이앤씨 스파로스 아카데미 6기 교육 중 진행한 1차 프로젝트로, 스타벅스 앱의 온라인 스토어 기능을
          리빌딩하고 개선하는 것을 목표로 하였습니다.
        </p>
        <SectionTitle>주요 기능</SectionTitle>
        <p>인증, 소셜 로그인, 상품 조회 및 필터링, 상품 옵션, 정렬, 검색, 장바구니, 배송지, 찜, 리뷰, 주문/결제</p>
        <SectionTitle>참여 역할 및 구현 기능</SectionTitle>
        <p>
          Auth <GrayText>로그인/회원가입, 소셜 로그인/회원가입, 로그아웃, 이메일 인증, 비밀번호 재설정</GrayText>
        </p>
        <p>
          Main <GrayText>이벤트 배너 슬라이드, 상품 캐러셀, 기획전 페이지, 베스트 페이지</GrayText>
        </p>
        <p>
          Product{' '}
          <GrayText>
            검색, 무한 스크롤 상품 리스트, 카테고리에 따른 상품 필터링, 상품 상세, 리뷰 페이지, 상품/리뷰 정렬
          </GrayText>
        </p>
        <p>
          Order <GrayText>리뷰 작성</GrayText>
        </p>
        <p className="text-gray pt-4">
          • <ForegroundText>전반적인 시스템 아키텍처 및 DB 구조 설계에 참여</ForegroundText>하였으며,{' '}
          <ForegroundText>요구사항을 바탕으로 기능 구성과 흐름을 정의</ForegroundText>하였습니다.
        </p>
        <p className="text-gray">
          • <ForegroundText>라이브러리 사용을 최소한</ForegroundText>으로 하여 외부 의존성을 줄인 네이티브 개발을 목표로
          하였습니다.
        </p>
        <p className="text-gray">
          • <ForegroundText>아토믹 디자인 원칙</ForegroundText>을 기반으로 하여 체계적이고 재사용 가능한 컴포넌트
          아키텍처를 구축하였습니다.
        </p>
      </>
    ),
    remindUrl: 'https://lumpy-surprise-c63.notion.site/1f5e4217dd6a80269bb2c7c76b5b2588',
  },
  {
    title: '반응형 이커머스 스토어',
    badges: ['개인 프로젝트'],
    images: [
      '/img/slide/e-commerce-slide1.jpg',
      '/img/slide/e-commerce-slide2.jpg',
      '/img/slide/e-commerce-slide3.jpg',
      '/img/slide/e-commerce-slide4.jpg',
      '/img/slide/e-commerce-slide5.jpg',
      '/img/slide/e-commerce-slide6.jpg',
      '/img/slide/e-commerce-slide7.jpg',
      '/img/slide/e-commerce-slide8.jpg',
      '/img/slide/e-commerce-slide9.jpg',
    ],
    period: '2025.01.09. - 2025.02.14.',
    siteUrl: 'https://e-commerce-store-gamma-brown.vercel.app/',
    readmeUrl: 'https://github.com/yunchyn/e-commerce-store',
    contributors: '참여 인원: 1명 (프론트엔드 1명)',
    techStack: ['Typescript', 'React', 'Tailwind', 'Redux', 'Supabase', 'Figma', 'Vercel'],
    desc: (
      <>
        <p>
          피그마 커뮤니티에 무료 배포되어 있는 반응형 이커머스 웹사이트 디자인 템플릿을 이용하여 제작한 페이지로, 반응형
          디자인과 레이아웃에 중점을 둔 인터랙티브 웹페이지입니다.
        </p>
        <SectionTitle>주요 기능</SectionTitle>
        <p>
          Main <GrayText>메인 배너 슬라이드, 상품 캐러셀</GrayText>
        </p>
        <p>
          Product <GrayText>상품 리스트, 카테고리 상품 필터링, 상품 정렬, 상품 상세 페이지, 리뷰, 리뷰 작성</GrayText>
        </p>
        <p>
          Auth <GrayText>로그인/회원가입, 프로필 수정, 배송지 등록, 로그아웃</GrayText>
        </p>
        <p>
          Cart <GrayText>장바구니 추가, 삭제, 개수 변경</GrayText>
        </p>
        <p>
          Wishlist <GrayText>위시리스트 추가, 삭제</GrayText>
        </p>
        <p className="text-gray pt-4">
          • PostgreSQL 기반 Supabase DB 스키마를 직접 설계하고{' '}
          <ForegroundText>별도 백엔드 없이 Supabase DB와 연결</ForegroundText>하여 페이지를 구현하였습니다.
        </p>
        <p className="text-gray">
          • <ForegroundText>반응형 레이아웃</ForegroundText>에 중점을 두고 Tailwind를 활용하여 다양한 해상도의 UI를
          구현하였습니다.
        </p>
        <p className="text-gray">
          • <ForegroundText>Redux</ForegroundText>를 이용하여 장바구니, 사용자 인증 상태를 전역으로 관리하였습니다.
        </p>
      </>
    ),
  },
  {
    title: '모동숲 가이드',
    badges: ['개인 프로젝트'],
    images: [
      '/img/slide/animal-crossing-slide1.png',
      '/img/slide/animal-crossing-slide2.png',
      '/img/slide/animal-crossing-slide3.png',
      '/img/slide/animal-crossing-slide4.png',
      '/img/slide/animal-crossing-slide5.png',
      '/img/slide/animal-crossing-slide6.png',
      '/img/slide/animal-crossing-slide7.png',
    ],
    period: '2024.10.31. - 2025.01.07.',
    siteUrl: 'https://animal-crossing-guide.vercel.app/',
    readmeUrl: 'https://github.com/yunchyn/Animal-crossing-guide',
    contributors: '참여 인원: 1명 (프론트엔드 1명)',
    techStack: ['Javascript', 'React', 'Styled components', 'Axios', 'Framer motion', 'React query', 'Figma', 'Vercel'],
    desc: (
      <>
        <p>
          게임 '모여봐요 동물의 숲'의 공략 정보를 제공하는 사이트로, 오픈 API와 라이브러리를 이용하여 페이지를
          구현하였습니다.
        </p>
        <SectionTitle>주요 기능</SectionTitle>
        <p>
          주민 일람, 생물 도감, 아이템 카탈로그, 레시피 도감, 이벤트 일정, 주민/생물/아이템 상세 페이지, 메인 화면 Todo
          목록, 키워드 검색 및 카테고리 필터링
        </p>
        <p className="text-gray pt-4">
          • <ForegroundText>Figma로 직접 디자인을 구현</ForegroundText>하였습니다.
        </p>
        <p className="text-gray">
          • <ForegroundText>React query를 이용한 이미지 캐싱</ForegroundText>으로{' '}
          <ForegroundText>이미지 로딩 속도를 최적화</ForegroundText>하였습니다.
        </p>
      </>
    ),
  },
];
