export type Category = 'All' | 'Tech' | 'Marketing' | 'Biz' | 'Culture';

export interface ContentItem {
  id: string;
  title: string;
  thumbnail: string;
  category: Category;
  type: 'Blog' | 'Youtube' | 'Podcast';
  readTime: string; // e.g., "3 min"
  summary: string;
  keyTakeaways: string[];
  originalLink: string;
  author: string;
  date: string;
}

export interface Newsletter {
  id: string;
  title: string;
  date: string;
  desc: string;
}