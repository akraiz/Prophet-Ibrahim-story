
import React from 'react';
import { IconProps } from '../../types';

/**
 * SentimentSatisfiedIcon component.
 * Renders an SVG icon representing a satisfied sentiment (happy face with a dimple/accent).
 * This is the 'sentiment_satisfied_alt' icon from Material Design Icons.
 * @param {IconProps} props - Component props.
 * @param {string} [props.className] - Additional CSS classes for styling the SVG.
 * @returns {React.ReactNode} The SVG icon.
 */
const SentimentSatisfiedIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-3.5-8c.83 0 1.5-.67 1.5-1.5S9.33 9 8.5 9s-1.5.67-1.5 1.5S7.67 12 8.5 12zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 9 15.5 9s-1.5.67-1.5 1.5S14.67 12 15.5 12zm-2.71 3.12c-.32.09-.66.13-1.01.13-.33 0-.65-.04-.96-.13a4.41 4.41 0 01-3.07-3.87c-.07-.51.35-.96.86-.96s.84.16.95.63c.29 1.29.84 2.2 1.55 2.78.73.6 1.68.9 2.72.9.91 0 1.74-.24 2.45-.76.29-.21.71-.14.91.14.21.29.14.71-.14.91-.91.63-2.03 1-3.22 1z"/>
  </svg>
);

export default SentimentSatisfiedIcon;
