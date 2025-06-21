import { useEffect, useRef } from 'react';
import { useFloatingAnimation, usePulseEffect } from '@/hooks/useGSAP';

interface LoadingAnimationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingAnimation = ({ className = '', size = 'md' }: LoadingAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = usePulseEffect(1500);
  const floatingRef = useFloatingAnimation(8, 2);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div ref={containerRef} className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Main loading circle */}
        <div 
          ref={pulseRef}
          className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
        />
        
        {/* Floating particles */}
        <div 
          ref={floatingRef}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full transform -translate-x-1/2 animate-ping" />
          <div className="absolute top-1/2 right-0 w-1 h-1 bg-purple-500 rounded-full transform translate-y-1/2 animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-pink-500 rounded-full transform -translate-x-1/2 animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-0 w-1 h-1 bg-green-500 rounded-full transform -translate-y-1/2 animate-ping" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingAnimation size="lg" className="mb-8" />
        <div className="text-white text-lg font-medium animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
}; 