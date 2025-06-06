
import React from 'react';
import { NavigationControlsProps } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

/**
 * NavigationControls component.
 * Provides UI elements for navigating through cards, including previous/next buttons
 * and pagination dots. Buttons are disabled based on current index or if navigation is globally disabled.
 *
 * For RTL:
 * - "Previous" button shows a right-pointing arrow (ChevronRightIcon).
 * - "Next" button shows a left-pointing arrow (ChevronLeftIcon).
 *
 * @param {NavigationControlsProps} props - The properties for the NavigationControls component.
 * @returns {React.ReactNode} The rendered navigation controls UI.
 */
const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentIndex,
  totalCards,
  onPrev,
  onNext,
  onGoTo,
  isNavigatingDisabled,
}) => {
  const isPrevDisabled = currentIndex === 0 || isNavigatingDisabled;
  const isNextDisabled = currentIndex === totalCards - 1 || isNavigatingDisabled;

  const buttonBaseClasses = "p-3 rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50";
  const enabledButtonClasses = "bg-sky-600 hover:bg-sky-700 text-white shadow-md";
  const disabledButtonClasses = "bg-gray-300 text-gray-500 cursor-not-allowed";

  return (
    <div className="flex flex-col items-center space-y-6 mt-8 mb-4 w-full max-w-2xl mx-auto px-4">
      {/* Arrow Buttons */}
      <div className="flex justify-between w-full">
        <button
          onClick={onPrev}
          disabled={isPrevDisabled}
          aria-label="البطاقة السابقة" // Previous Card in Arabic
          className={`${buttonBaseClasses} ${isPrevDisabled ? disabledButtonClasses : enabledButtonClasses}`}
        >
          {/* In RTL, "Previous" means moving visually to the right */}
          <ChevronRightIcon className="w-6 h-6" />
        </button>
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          aria-label="البطاقة التالية" // Next Card in Arabic
          className={`${buttonBaseClasses} ${isNextDisabled ? disabledButtonClasses : enabledButtonClasses}`}
        >
          {/* In RTL, "Next" means moving visually to the left */}
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      {totalCards > 1 && (
         <div className="flex space-x-2 rtl:space-x-reverse items-center justify-center flex-wrap"> {/* rtl:space-x-reverse for correct dot order */}
          {Array.from({ length: totalCards }).map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => onGoTo(index)}
              disabled={isNavigatingDisabled}
              aria-label={`اذهب إلى البطاقة ${index + 1}`} // Go to card X in Arabic
              className={`w-3 h-3 rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-sky-500
                ${currentIndex === index ? 'bg-sky-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}
                ${isNavigatingDisabled ? 'cursor-not-allowed opacity-50' : ''}
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(NavigationControls);
