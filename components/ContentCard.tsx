import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Youtube, Mic, FileText } from 'lucide-react';
import { ContentItem } from '../types';

interface ContentCardProps {
  item: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Youtube': return <Youtube size={14} />;
      case 'Podcast': return <Mic size={14} />;
      default: return <FileText size={14} />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'Youtube': return 'bg-red-50 text-red-600 border-red-100';
      case 'Podcast': return 'bg-purple-50 text-purple-600 border-purple-100';
      default: return 'bg-blue-50 text-blue-600 border-blue-100';
    }
  };

  return (
    <Link to={`/detail/${item.id}`} className="block group mb-6 break-inside-avoid">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={item.thumbnail} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
             <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${getBadgeColor(item.type)}`}>
              {getIcon(item.type)}
              {item.type}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-secondary uppercase tracking-wider">
              {item.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={12} />
              {item.readTime}
            </span>
          </div>
          
          <h3 className="font-bold text-lg text-text leading-tight group-hover:text-primary transition-colors mb-2">
            {item.title}
          </h3>
          
          <p className="text-sm text-gray-500 line-clamp-2">
            {item.summary}
          </p>

          <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">By {item.author}</span>
            <span className="text-xs text-gray-400">{item.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;