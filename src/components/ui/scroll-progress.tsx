import { useScrollProgress } from '@/hooks/useGSAP';

export const ScrollProgress = () => {
  const progressRef = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}; 