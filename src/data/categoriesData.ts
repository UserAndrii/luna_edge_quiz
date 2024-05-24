import html from '../images/html.webp';
import css from '../images/css.webp';
import js from '../images/js.webp';
import react from '../images/react.webp';
import next from '../images/next.webp';

export interface ICategoryData {
  id: number;
  category: string;
  img: string;
}

export const categoriesData: ICategoryData[] = [
  { id: 1, category: 'html', img: html },
  { id: 2, category: 'css', img: css },
  { id: 3, category: 'js', img: js },
  { id: 4, category: 'react', img: react },
  { id: 5, category: 'next', img: next },
];
