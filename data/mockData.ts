import { ContentItem, Newsletter } from '../types';
import { 
  GALLERY_THUMB_1, GALLERY_THUMB_2, GALLERY_THUMB_3, GALLERY_THUMB_4,
  GALLERY_THUMB_5, GALLERY_THUMB_6, GALLERY_THUMB_7, GALLERY_THUMB_8 
} from '../images/assets';

export const contentList: ContentItem[] = [
  {
    id: '1',
    title: '2024년 퍼포먼스 마케팅의 종말과 새로운 시작',
    thumbnail: GALLERY_THUMB_1,
    category: 'Marketing',
    type: 'Blog',
    readTime: '7 min',
    author: 'Kim Growth',
    date: '2024.03.15',
    summary: '쿠키리스 시대, 서드파티 데이터의 종말이 가져온 마케팅 시장의 변화와 이에 대응하는 퍼스트파티 데이터 전략에 대해 심도 있게 다룹니다.',
    keyTakeaways: [
      '서드파티 데이터 수집 중단으로 인한 타겟팅 정확도 하락',
      '자사몰 데이터(First-party) 수집 및 CRM 마케팅의 중요성 대두',
      '커뮤니티 기반의 오가닉 트래픽 확보 성공 사례 분석'
    ],
    originalLink: 'https://example.com/marketing-2024'
  },
  {
    id: '2',
    title: '개발자 생산성을 200% 높이는 AI 코딩 툴 5선',
    thumbnail: GALLERY_THUMB_2,
    category: 'Tech',
    type: 'Youtube',
    readTime: '12 min',
    author: 'Tech Leader Lee',
    date: '2024.03.10',
    summary: '단순 반복 코딩 업무를 줄여주는 최신 AI 도구들을 직접 사용해보고 장단점을 비교 분석했습니다.',
    keyTakeaways: [
      'Copilot vs Cursor 장단점 비교',
      '보일러플레이트 코드 자동 생성으로 인한 시간 단축',
      '보안 이슈를 고려한 엔터프라이즈급 AI 도입 전략'
    ],
    originalLink: 'https://youtube.com/example'
  },
  {
    id: '3',
    title: '초기 스타트업, 채용 브랜딩이 전부다',
    thumbnail: GALLERY_THUMB_5,
    category: 'Culture',
    type: 'Blog',
    readTime: '5 min',
    author: 'HR Manager Park',
    date: '2024.02.28',
    summary: '연봉 경쟁이 불가능한 초기 스타트업이 좋은 인재를 데려오기 위해 갖춰야 할 채용 브랜딩의 핵심 요소를 정리했습니다.',
    keyTakeaways: [
      '회사의 미션과 비전을 명확히 전달하는 채용 공고 작성법',
      '구성원 인터뷰 콘텐츠가 지원율에 미치는 영향',
      '웰컴 키트와 온보딩 경험 설계의 중요성'
    ],
    originalLink: 'https://example.com/hiring-culture'
  },
  {
    id: '4',
    title: 'SaaS B2B 세일즈, 콜드메일 성공률 높이기',
    thumbnail: GALLERY_THUMB_4,
    category: 'Biz',
    type: 'Blog',
    readTime: '8 min',
    author: 'Sales Pro Choi',
    date: '2024.03.01',
    summary: '오픈율 5% 미만의 콜드메일을 30%까지 끌어올린 실전 노하우와 제목 작성 프레임워크를 공유합니다.',
    keyTakeaways: [
      '고객의 페인포인트(Pain Point)를 건드리는 제목 선정',
      '개인화된 도입부 작성의 중요성',
      'CTA(Call To Action)의 명확한 배치와 후속 조치 전략'
    ],
    originalLink: 'https://example.com/b2b-sales'
  },
  {
    id: '5',
    title: '실리콘밸리 투자 혹한기, 생존을 위한 지표 관리',
    thumbnail: GALLERY_THUMB_6,
    category: 'Biz',
    type: 'Podcast',
    readTime: '45 min',
    author: 'VC Insight',
    date: '2024.02.15',
    summary: '투자 시장이 얼어붙은 현재, VC들이 가장 중요하게 보는 지표(Unit Economics)와 런웨이 확보 전략을 듣습니다.',
    keyTakeaways: [
      '매출 성장보다 중요해진 영업이익률과 현금 흐름',
      '번레이트(Burn Rate)를 줄이기 위한 구조조정 사례',
      '피봇팅(Pivoting)의 적절한 타이밍 판단 기준'
    ],
    originalLink: 'https://podcast.example.com/vc-winter'
  },
  {
    id: '6',
    title: 'Next.js 14, 무엇이 달라졌나?',
    thumbnail: GALLERY_THUMB_8,
    category: 'Tech',
    type: 'Blog',
    readTime: '10 min',
    author: 'Frontend Dev Kim',
    date: '2024.03.20',
    summary: '서버 액션(Server Actions)의 안정화와 퍼포먼스 개선 사항을 중심으로 Next.js 14의 주요 변경점을 알아봅니다.',
    keyTakeaways: [
      '서버 컴포넌트와 클라이언트 컴포넌트의 명확한 분리',
      'Turbopack 도입으로 인한 빌드 속도 향상',
      'Partial Prerendering 개념 소개'
    ],
    originalLink: 'https://nextjs.org/blog'
  },
  {
    id: '7',
    title: '그로스 해킹: 제품이 스스로 팔리게 하는 법',
    thumbnail: GALLERY_THUMB_7,
    category: 'Marketing',
    type: 'Youtube',
    readTime: '15 min',
    author: 'Growth Master',
    date: '2024.01.10',
    summary: '마케팅 예산 없이 바이럴 루프(Viral Loop)를 설계하여 유저를 모은 프로덕트 주도 성장(PLG) 사례를 분석합니다.',
    keyTakeaways: [
      '추천인 프로그램(Referral) 설계의 황금비율',
      '사용자 경험(UX) 내에 녹아든 공유 유도 장치',
      '네트워크 효과를 활용한 플랫폼 비즈니스 전략'
    ],
    originalLink: 'https://youtube.com/growth'
  },
  {
    id: '8',
    title: '창업 1년 차, CEO가 겪는 멘탈 관리법',
    thumbnail: GALLERY_THUMB_3,
    category: 'Culture',
    type: 'Podcast',
    readTime: '30 min',
    author: 'Founder Story',
    date: '2024.02.05',
    summary: '끝없는 의사결정과 책임감 속에서 번아웃을 예방하고 건강한 리더십을 유지하는 방법에 대해 이야기합니다.',
    keyTakeaways: [
      '일과 삶의 분리가 아닌 조화(Work-Life Harmony)',
      '동료 창업가 커뮤니티의 중요성',
      '실패를 학습으로 재정의하는 마인드셋'
    ],
    originalLink: 'https://podcast.example.com/ceo-mental'
  }
];

export const newsletterArchives: Newsletter[] = [
  { id: '12', title: 'AI 툴로 업무 효율 300% 높이기', date: '2024.03.18', desc: '반복 업무 자동화 가이드' },
  { id: '11', title: '초기 스타트업의 채용 브랜딩 전략', date: '2024.03.11', desc: '돈 안 드는 채용 마케팅' },
  { id: '10', title: '2024년 1분기 마케팅 트렌드 결산', date: '2024.03.04', desc: '숏폼 콘텐츠의 진화' },
  { id: '09', title: '투자 유치를 위한 IR 피치덱 작성법', date: '2024.02.26', desc: 'VC가 보고 싶어하는 장표' },
];