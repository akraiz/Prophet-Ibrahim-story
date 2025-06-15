
import React, { useEffect, useState } from 'react';
// WhatsAppIcon import is removed as it's no longer used here.

interface SplashScreenProps {
  onDismiss: () => void;
}

/**
 * SplashScreen component.
 * Displays a welcome message for Eid Adha with a festive design.
 * It includes a title, subtitle, a button to dismiss the screen,
 * and a footer with the developer's name.
 * The component fades in on mount, featuring an inner card for content.
 * The main action button is now positioned below the content card.
 * The font for "أحمد كريز" is 'Almarai'.
 * Enhanced look and feel with updated gradients, typography, and styling.
 *
 * @param {SplashScreenProps} props - The properties for the SplashScreen component.
 * @param {() => void} props.onDismiss - Callback function to execute when the splash screen is dismissed.
 * @returns {React.ReactNode} The rendered splash screen UI.
 */
const SplashScreen: React.FC<SplashScreenProps> = ({ onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // WhatsApp link and message are removed as the button is moved.

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 p-4 sm:p-6 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-modal="true"
      role="dialog"
      aria-labelledby="splash-title"
    >
      {/* Inner card for content */}
      <div className="bg-white/95 w-full max-w-md sm:max-w-lg p-8 sm:p-10 md:p-12 rounded-[2rem] shadow-xl text-center flex flex-col items-center border border-white/60">
        <h1
          id="splash-title"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-teal-800 mb-5 sm:mb-6 drop-shadow-sm mt-10"
          style={{ fontFamily: "'Cairo', sans-serif", textShadow: "1px 2px 3px rgba(0,0,0,0.1)" }}
        >
          عِيدُ أَضْحَى مُبَارَكٌ
        </h1>
        <p
          id="splash-subtitle" 
          className="text-lg sm:text-xl md:text-xl text-gray-700 mb-2"
          style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
        >
          كل عام وأنتم بخير وصحة وسعادة
        </p>
        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10"
          style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
        >
          تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ صَالِحَ الْأَعْمَالِ
        </p>
        
        {/* Footer Section inside the card */}
        <div className="mt-auto pt-5 w-full border-t border-gray-200">
          <p 
            className="text-lg font-semibold text-teal-700 text-center" // Centered text
            style={{ fontFamily: "'Almarai', sans-serif" }}
          >
            أحمد كريز
          </p>
        </div>
        {/* End Footer Section */}
      </div>

      {/* Dismiss button moved below the card */}
      <button
        onClick={onDismiss}
        className="mt-8 px-10 py-3 sm:px-12 sm:py-4 bg-gradient-to-br from-teal-500 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-emerald-400/50 focus:ring-cyan-500 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
        style={{ fontFamily: "'Cairo', sans-serif" }}
        aria-label="يلا بينا للقصة وادخل إلى التطبيق"
      >
        يلا بينا للقصة
      </button>
    </div>
  );
};

export default SplashScreen;
