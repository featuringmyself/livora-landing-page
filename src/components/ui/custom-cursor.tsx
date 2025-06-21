import { useEffect, useRef, useState } from 'react';
import { useMouseFollower } from '@/hooks/useGSAP';

interface CustomCursorProps {
  className?: string;
}

export const CustomCursor = ({ className = '' }: CustomCursorProps) => {
  const cursorRef = useMouseFollower();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add hover detection for interactive elements
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.classList.contains('interactive')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference ${
        isHovering ? 'scale-150' : 'scale-100'
      } ${isClicking ? 'scale-75' : ''} transition-transform duration-200 ease-out ${className}`}
    >
      <div className="w-full h-full bg-white rounded-full opacity-80" />
      <div 
        className={`absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
          isHovering ? 'scale-200 opacity-100' : 'scale-100 opacity-60'
        }`} 
      />
    </div>
  );
}; 