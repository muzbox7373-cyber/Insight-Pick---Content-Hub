import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import ContentCard from '../components/ContentCard';
import { contentList } from '../data/mockData';
import { Category } from '../types';
import { HERO_BG } from '../images/assets';

const categories: Category[] = ['All', 'Marketing', 'Tech', 'Biz', 'Culture'];

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredContent = useMemo(() => {
    if (selectedCategory === 'All') return contentList;
    return contentList.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="Office background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
            흩어진 인사이트, <br className="hidden sm:block"/>
            여기서 <span className="text-secondary">3분 만에</span> 줍다.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 font-light">
            스타트업 실무자를 위한 엄선된 블로그, 유튜브, 팟캐스트 큐레이션.
            <br className="hidden md:block"/> 매주 업데이트되는 트렌드를 놓치지 마세요.
          </p>
          <Link 
            to="/subscribe" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-900/50"
          >
            이번 주 트렌드 요약받기
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
             <div className="flex items-center gap-2 text-gray-400 mr-2 flex-shrink-0">
                <Filter size={16} />
                <span className="text-sm font-medium uppercase">Filter</span>
             </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  selectedCategory === category
                    ? 'bg-gray-800 text-white border-gray-800'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredContent.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredContent.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">해당 카테고리의 콘텐츠가 없습니다.</p>
            <button 
              onClick={() => setSelectedCategory('All')} 
              className="mt-4 text-primary font-medium hover:underline"
            >
              전체 보기
            </button>
          </div>
        )}

        <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm mb-4">더 많은 인사이트를 원하시나요?</p>
            <Link to="/subscribe" className="text-primary font-bold hover:text-secondary transition-colors">
                뉴스레터 구독하고 전체 아카이브 보기 →
            </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;