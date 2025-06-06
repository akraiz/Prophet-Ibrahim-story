
import React from 'react';
import { IconProps } from '../../types';

/**
 * ChevronRightIcon component.
 * Renders an SVG icon representing a right-pointing chevron.
 * @param {IconProps} props - Component props.
 * @param {string} [props.className] - Additional CSS classes for styling the SVG.
 * @returns {React.ReactNode} The SVG icon.
 */
const ChevronRightIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export default ChevronRightIcon;
