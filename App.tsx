
import React, { useState, useCallback, useEffect } from 'react';
import Card from './components/Card';
import NavigationControls from './components/NavigationControls';
// SplashScreen import removed
import WhatsAppIcon from './components/icons/WhatsAppIcon';
import { CARDS_DATA } from './constants';
import { CardData } from './types';

/**
 * App component.
 * The main component for the sliding card awareness application.
 * It manages the current card being displayed, handles navigation logic,
 * and renders the card and navigation controls.
 * Implements a fade transition between cards and supports touch swipe navigation.
 * The footer includes developer credit and a WhatsApp contact button.
 * The splash screen has been removed.
 *
 * @returns {React.ReactNode} The rendered application UI.
 */
const App: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false); // For card transition effect
  const [displayedCard, setDisplayedCard] = useState<CardData | null>(null);

  // Touch swipe state
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const minSwipeDistance = 50; // Minimum distance (px) to be considered a swipe

  // Main app visibility state for initial fade-in
  const [mainAppVisible, setMainAppVisible] = useState<boolean>(false);

  // WhatsApp contact details
  const whatsappNumber = "966590065162";
  const whatsappMessage = encodeURIComponent("السلام عليكم، اطلعت على تطبيق قصة إبراهيم والذبيح، عمل رائع! لدي بعض الملاحظات أو الاستفسارات.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Initialize displayedCard or handle empty CARDS_DATA
  useEffect(() => {
    if (CARDS_DATA.length > 0) {
      setDisplayedCard(CARDS_DATA[currentCardIndex]);
    } else {
      setDisplayedCard(null);
    }
  }, [currentCardIndex]);

  // Effect to make the main app visible with a fade-in
  useEffect(() => {
    const timer = setTimeout(() => {
      setMainAppVisible(true);
    }, 50); // Short delay for the fade-in effect
    return () => clearTimeout(timer);
  }, []);


  /**
   * Navigates to a specific card index with a fade transition.
   * @param {number} newIndex - The index of the card to navigate to.
   */
  const navigateToCard = useCallback((newIndex: number) => {
    if (newIndex === currentCardIndex && !isFading) return; 
    if (isFading) return; 

    setIsFading(true);
    setTimeout(() => {
      setCurrentCardIndex(newIndex);
      setTimeout(() => {
         setIsFading(false);
      }, 50); 
    }, 300); 
  }, [currentCardIndex, isFading]);

  /**
   * Memoized handler for navigating to the previous card.
   */
  const handlePrevCard = useCallback(() => {
    if (CARDS_DATA.length === 0) return;
    navigateToCard(currentCardIndex > 0 ? currentCardIndex - 1 : CARDS_DATA.length - 1); 
  }, [currentCardIndex, navigateToCard, CARDS_DATA.length]);

  /**
   * Memoized handler for navigating to the next card.
   */
  const handleNextCard = useCallback(() => {
    if (CARDS_DATA.length === 0) return;
    navigateToCard(currentCardIndex < CARDS_DATA.length - 1 ? currentCardIndex + 1 : 0); 
  }, [currentCardIndex, navigateToCard, CARDS_DATA.length]);

  /**
   * Memoized handler for navigating directly to a card via pagination dots.
   * @param {number} index - The index of the card to go to.
   */
  const handleGoToCard = useCallback((index: number) => {
    if (CARDS_DATA.length === 0) return;
    navigateToCard(index);
  }, [navigateToCard, CARDS_DATA.length]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isFading || CARDS_DATA.length === 0) return;
    setTouchEndX(null); // Reset touch end on new touch start
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isFading || !touchStartX || CARDS_DATA.length === 0) return; 
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (isFading || !touchStartX || !touchEndX || CARDS_DATA.length === 0) {
      setTouchStartX(null);
      setTouchEndX(null);
      return;
    }

    const distance = touchStartX - touchEndX;
    const isRtl = document.documentElement.dir === 'rtl';

    const absDistance = Math.abs(distance);

    if (absDistance > minSwipeDistance) {
      if (isRtl) {
        if (distance < 0) { 
          handleNextCard();
        } else { 
          handlePrevCard();
        }
      } else {
        if (distance > 0) { 
          handleNextCard();
        } else { 
          handlePrevCard();
        }
      }
    }
    
    setTouchStartX(null);
    setTouchEndX(null);
  };


  if (CARDS_DATA.length === 0 || !displayedCard) {
    return (
      <div 
        className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 p-4 text-center transition-opacity duration-500 ease-in-out ${mainAppVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-3xl font-bold text-gray-700 mb-4">بطاقات التوعية</h1>
        <p className="text-xl text-gray-600">لا توجد بطاقات متاحة في الوقت الحالي. يرجى التحقق مرة أخرى لاحقًا.</p>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 p-4 overflow-x-hidden transition-opacity duration-500 ease-in-out ${mainAppVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <header className="mb-6 md:mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 py-2">
          إبراهيم والذبيح
        </h1>
        <p className="text-gray-700 mt-2 text-xl sm:text-2xl">قصة الإيمان والطاعة</p>
      </header>
      
      <main className="w-full flex-grow flex flex-col items-center justify-center">
        <div 
          className={`w-full transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
          style={{ minHeight: '500px' }} // Ensure container doesn't collapse during fade
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Card card={displayedCard} />
        </div>
        
        <NavigationControls
          currentIndex={currentCardIndex}
          totalCards={CARDS_DATA.length}
          onPrev={handlePrevCard}
          onNext={handleNextCard}
          onGoTo={handleGoToCard}
          isNavigatingDisabled={isFading}
        />
      </main>

      <footer className="text-center text-gray-700 text-sm mt-auto py-4 px-4">
        <div>
          <p>صدقة جارية 🎁 - ذِكرى لِلذّاكِرينَ</p>
          <p className="mt-1">‫نسألكم الدعـاء 🤲</p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600 mb-2" style={{ fontFamily: "'Almarai', sans-serif" }}>
            تطوير: أحمد كريز
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs text-green-600 hover:text-green-700 hover:underline focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-opacity-75 rounded-md px-2 py-1 transition-colors duration-200 ease-in-out group"
            style={{ fontFamily: "'Almarai', sans-serif" }}
            aria-label="تواصل مع المطور عبر واتساب"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current transition-transform duration-200 ease-in-out group-hover:scale-105" />
            <span>تواصل عبر واتساب</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
