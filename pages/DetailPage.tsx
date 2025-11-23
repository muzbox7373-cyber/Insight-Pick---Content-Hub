import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Clock, Tag, Share2, Bookmark } from 'lucide-react';
import { contentList } from '../data/mockData';
import ContentCard from '../components/ContentCard';
import { DETAIL_HERO } from '../images/assets';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const content = contentList.find(item => item.id === id);
  
  // Recommend other contents from same category
  const relatedContent = contentList
    .filter(item => item.category === content?.category && item.id !== content?.id)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800">콘텐츠를 찾을 수 없습니다.</h2>
        <button onClick={() => navigate('/')} className="text-primary hover:underline">홈으로 돌아가기</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Image */}
      <div className="relative h-64 md:h-80 w-full">
        <img 
          src={DETAIL_HERO} 
          alt="Desk setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-6 left-4 md:left-8">
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm"
            >
                <ArrowLeft size={18} />
                <span>Back</span>
            </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-xs font-bold uppercase tracking-wide">
                    {content.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={16} />
                    {content.readTime} read
                </span>
                <span className="text-sm text-gray-400">
                    {content.date}
                </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                {content.title}
            </h1>

            {/* Editor's Note */}
            <div className="bg-slate-50 border-l-4 border-secondary p-5 mb-8 rounded-r-lg">
                <h3 className="text-sm font-bold text-gray-500 uppercase mb-2 flex items-center gap-2">
                    <Tag size={14} /> Editor's Note
                </h3>
                <p className="text-gray-700 italic font-medium">
                    "이 콘텐츠를 선정한 이유: {content.summary.slice(0, 30)}... 
                    변화하는 트렌드의 핵심을 짚어줍니다."
                </p>
            </div>

            {/* 3 Key Takeaways */}
            <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3 Key Takeaways</h3>
                <ul className="space-y-4">
                    {content.keyTakeaways.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mt-0.5">
                                {index + 1}
                            </span>
                            <span className="text-gray-700 text-lg leading-relaxed">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                <a 
                    href={content.originalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                    원문 전체 읽으러 가기
                    <ExternalLink size={20} />
                </a>
                <div className="flex gap-4">
                     <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-xl font-medium transition-colors">
                        <Bookmark size={20} />
                        <span className="sm:hidden">저장</span>
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-xl font-medium transition-colors">
                        <Share2 size={20} />
                        <span className="sm:hidden">공유</span>
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Recommended Section */}
      {relatedContent.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 px-2 border-l-4 border-primary pl-4">
                  관련 추천 콘텐츠
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedContent.map(item => (
                      <ContentCard key={item.id} item={item} />
                  ))}
              </div>
          </div>
      )}
    </div>
  );
};

export default DetailPage;