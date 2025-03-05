import React, { useEffect, useState } from 'react';

interface SplashPageProps {
  onComplete: () => void;
}

const SplashPage: React.FC<SplashPageProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade out after 3 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // After fade out (assume 1s transition) call onComplete
    const cleanupTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-50 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src="/lp_logo.webp"
        alt="Logo"
        className="w-42 h-32 animate-spinFromBottom"
      />
      <h1 className="mt-4 text-2xl text-gray-900">Welcome</h1>
      <style>{`
        @keyframes spinFromBottom {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }
          100% {
            transform: perspective(1000px) rotateY(360deg);
          }
        }
        .animate-spinFromBottom {
          transform-origin: bottom center;
          animation: spinFromBottom 3s linear;
        }
      `}</style>
    </div>
  );
};

export default SplashPage;