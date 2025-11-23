import React from 'react';
import { Mail, Briefcase, Award } from 'lucide-react';
import { ABOUT_PROFILE } from '../images/assets';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Profile Header */}
        <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                    <img 
                        src={ABOUT_PROFILE} 
                        alt="Curator Profile" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full border-2 border-white shadow-md">
                    <Award size={20} />
                </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Curator. Jin</h1>
            <p className="text-primary font-medium">5년 차 그로스 마케터 & 스타트업 덕후</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">안녕하세요, 정보의 홍수 속 등대지기입니다.</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                    매일 쏟아지는 수천 개의 아티클 중에서 <strong>'진짜'</strong> 도움이 되는 정보는 얼마나 될까요?
                    바쁜 스타트업 실무자들이 불필요한 검색으로 시간을 낭비하지 않도록, 
                    제가 대신 읽고, 보고, 듣고 엄선했습니다.
                </p>
                <p>
                    'Insight Pick'은 단순한 링크 모음이 아닙니다. 
                    현업에서 즉시 적용 가능한 <strong>Actionable Insight</strong>만을 큐레이션합니다.
                    마케팅, 테크, 조직문화, 그리고 비즈니스 트렌드까지. 
                    여러분의 성장을 돕는 러닝메이트가 되겠습니다.
                </p>
            </div>
            
            <hr className="my-8 border-gray-100"/>

            <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-3">
                    <Briefcase className="text-gray-400 mt-1" size={20} />
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">Career</h4>
                        <p className="text-sm text-gray-500">
                            Current: Growth Lead @Fintech Startup<br/>
                            Former: Content Marketer @Edu-tech
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Mail className="text-gray-400 mt-1" size={20} />
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">Contact</h4>
                        <p className="text-sm text-gray-500">
                            제휴 및 커피챗 문의 환영합니다.<br/>
                            <a href="mailto:curator@insightpick.com" className="text-primary hover:underline">curator@insightpick.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">제휴 및 문의하기</h3>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 bg-white" placeholder="답변 받으실 이메일" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 bg-white h-32" placeholder="어떤 내용인가요?"></textarea>
                </div>
                <button type="button" className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    보내기
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;