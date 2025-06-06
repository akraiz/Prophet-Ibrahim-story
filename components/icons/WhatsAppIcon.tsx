import React from 'react';
import { IconProps } from '../../types';

/**
 * WhatsAppIcon component.
 * Renders an SVG icon representing WhatsApp.
 * @param {IconProps} props - Component props.
 * @param {string} [props.className] - Additional CSS classes for styling the SVG.
 * @returns {React.ReactNode} The SVG icon.
 */
const WhatsAppIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.43 16.84L2.05 22L7.31 20.58C8.75 21.33 10.36 21.73 12.04 21.73H12.05C17.5 21.73 21.95 17.28 21.95 11.82C21.95 6.36 17.5 2 12.04 2ZM16.57 15.29C16.31 15.76 15.48 16.21 15.06 16.29C14.69 16.35 14.11 16.53 12.67 15.94C10.91 15.21 9.58 13.75 9.41 13.55C9.25 13.35 8.37 12.07 8.37 10.74C8.37 9.41 9.11 8.71 9.36 8.46C9.61 8.21 9.95 8.18 10.19 8.18C10.29 8.18 10.38 8.18 10.48 8.19C10.72 8.2 10.91 8.23 11.09 8.59C11.28 8.95 11.79 10.13 11.89 10.29C11.98 10.44 12.05 10.54 11.96 10.69C11.87 10.84 11.79 10.91 11.63 11.09C11.47 11.28 11.33 11.38 11.19 11.53C11.06 11.68 10.92 11.85 11.06 12.11C11.21 12.36 11.78 13.22 12.65 13.97C13.75 14.91 14.58 15.25 14.86 15.4C15.14 15.54 15.41 15.53 15.61 15.32C15.84 15.09 16.13 14.71 16.33 14.43C16.53 14.15 16.76 14.11 17.01 14.2C17.26 14.3 18.04 14.69 18.28 14.93C18.53 15.18 18.63 15.32 18.59 15.5C18.54 15.68 18.26 15.73 16.57 15.29Z" />
  </svg>
);

export default WhatsAppIcon;
