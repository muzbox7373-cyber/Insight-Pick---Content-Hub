import React, { useState } from 'react';
import { Mail, CheckCircle, Bell } from 'lucide-react';
import { newsletterArchives } from '../data/mockData';
import { SUBSCRIBE_IMG } from '../images/assets';

const SubscribePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail('');
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy & Form */}
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
                Weekly Newsletter
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              성장하는 마케터들의 <br/> 모닝 루틴, <span className="text-primary">[인사이트 픽]</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              매주 월요일 아침 8시, 당신의 메일함으로 배달됩니다.<br/>
              이미 <span className="font-bold text-gray-900">3,200명</span>의 스타트업 동료들이 구독 중입니다.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 flex flex-col sm:flex-row gap-2 max-w-lg">
                <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="email" 
                      placeholder="이메일 주소를 입력하세요" 
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                </div>
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md whitespace-nowrap"
                >
                  구독하기
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-100 p-6 rounded-2xl flex items-center gap-4 max-w-lg animate-fade-in-up">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <CheckCircle size={32} />
                </div>
                <div>
                    <h3 className="font-bold text-green-800 text-lg">구독이 완료되었습니다!</h3>
                    <p className="text-green-700">다음 주 월요일에 만나요.</p>
                </div>
              </div>
            )}
            
            <p className="text-xs text-gray-400 mt-4 ml-2">
              * 스팸은 발송하지 않습니다. 언제든 구독 취소 가능합니다.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-6 scale-95"></div>
            <img 
              src={SUBSCRIBE_IMG} 
              alt="Newsletter concept" 
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square transform transition-transform hover:-translate-y-2 duration-500"
            />
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3">
                <div className="bg-secondary/10 p-2 rounded-full text-secondary">
                    <Bell size={24} />
                </div>
                <div>
                    <p className="font-bold text-gray-900">New Issue!</p>
                    <p className="text-xs text-gray-500">Just arrived in your inbox</p>
                </div>
             </div>
          </div>
        </div>

        {/* Archive Section */}
        <div className="mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <span className="w-2 h-8 bg-gray-900 rounded-full"></span>
                지난 뉴스레터 몰아보기
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newsletterArchives.map((news) => (
                    <div key={news.id} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/50 transition-colors group cursor-pointer shadow-sm">
                        <span className="text-xs font-bold text-secondary mb-2 block">Vol.{news.id}</span>
                        <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {news.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">{news.desc}</p>
                        <span className="text-xs text-gray-400">{news.date}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;