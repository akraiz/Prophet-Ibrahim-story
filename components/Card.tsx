import React, { useState, useEffect } from 'react';
import { CardProps } from '../types';

/**
 * Helper function to format text.
 * Quranic Ayahs (enclosed in parentheses) are rendered with distinct styling:
 * a light blue background, sky blue text, subtle border, and a soft shadow.
 * @param {string} text - The text to format.
 * @returns {React.ReactNode[]} An array of React nodes with Ayahs styled.
 */
const formatTextWithBoldQuran = (text: string): React.ReactNode[] => {
  if (!text) return [];

  const parts = text.split(/(\([^)]+\))/g);

  return parts.map((part, index) => {
    if (part.startsWith('(') && part.endsWith(')')) {
      return (
        <span key={`quran-outer-${index}`} className="inline-block my-1 mx-0.5 align-baseline">
          <span
            key={`quran-box-${index}`}
            className="inline-block bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1.5 rounded-lg shadow-sm"
            style={{lineHeight: 'initial'}} 
          >
            <strong className="font-semibold" style={{letterSpacing: '0.01em'}}>
              {part}
            </strong>
          </span>
        </span>
      );
    }
    return part;
  }).filter(part => part !== ''); 
};


/**
 * Card component.
 * Displays the content of a single awareness card, including title, description,
 * religious evidence, a question, and an image. Handles image errors.
 * Quranic Ayahs are distinctively styled. Specific section headers are hidden,
 * while "سؤال للتفكر" is styled for emphasis. Line spacing is optimized for readability.
 *
 * @param {CardProps} props - The properties for the Card component.
 * @param {CardData} props.card - The data object for the card to be displayed.
 * @returns {React.ReactNode} The rendered card UI.
 */
const Card: React.FC<CardProps> = ({ card }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false); 
  }, [card.imageUrl]);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-2xl mx-auto flex flex-col">
      <div className="relative w-full h-64 sm:h-72 md:h-80 flex-shrink-0">
        {(imageError || !card.imageUrl) ? (
          <div className="w-full h-full bg-gray-300 flex flex-col items-center justify-center text-gray-600 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 mb-2 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.158 0a.079.079 0 11-1.172 0 .079.079 0 011.172 0z" />
            </svg>
            <span className="text-center text-gray-500 text-sm">الصورة غير متوفرة</span>
          </div>
        ) : (
          <img
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        )}
      </div>
      <div className="p-6 md:p-8 space-y-4 text-right flex flex-col flex-1 min-h-0"> 
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 flex-shrink-0">{card.title}</h2>
        
        <div className="space-y-4 ltr:pr-2 rtl:pl-2 flex-1 overflow-y-auto"> 
          {card.description && (
            <div className="mb-3">
              <p className="text-gray-700 leading-relaxed sm:leading-7 text-sm sm:text-base whitespace-pre-line">
                {formatTextWithBoldQuran(card.description)}
              </p>
            </div>
          )}
          {card.evidence && (
            <div className="mb-3">
              <p className="text-gray-600 leading-8 text-sm sm:text-base whitespace-pre-line">
                {formatTextWithBoldQuran(card.evidence)}
              </p>
            </div>
          )}
          {card.question && (
            <div>
              <h3 className="text-base font-medium text-sky-700 mb-2">سؤال للتفكر</h3>
              <p className="text-gray-700 font-medium leading-8 text-sm sm:text-base whitespace-pre-line">{card.question}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);