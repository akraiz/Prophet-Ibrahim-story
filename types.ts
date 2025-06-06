
/**
 * Represents the structure of a single card's data.
 */
export interface CardData {
  id: string;
  title: string;
  description: string;
  evidence: string;
  question: string;
  imageUrl: string;
}

/**
 * Props for the Card component.
 */
export interface CardProps {
  card: CardData;
}

/**
 * Props for the NavigationControls component.
 */
export interface NavigationControlsProps {
  currentIndex: number;
  totalCards: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
  isNavigatingDisabled: boolean;
}

/**
 * Props for Icon components.
 */
export interface IconProps {
  className?: string;
}
