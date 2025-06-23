import React, { useState, useEffect } from 'react';
import { Gem } from 'lucide-react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState(null);
  let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      } else {
        setScrollDirection(null);
      }
      lastScrollY = currentScrollY;
      
      setTimeout(() => setScrollDirection(null), 500);
    };
    
    if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('scroll', handleScroll);
        lastScrollY = window.scrollY;
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  let rotation = 0;
  if (scrollDirection === 'down') {
    rotation = 45;
  } else if (scrollDirection === 'up') {
    rotation = -45;
  }

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0) rotate(${rotation}deg)`,
        transition: 'transform 0.2s ease-out, rotate 0.2s ease-out'
      }}
    >
      <Gem className="h-6 w-6 text-yellow-500" />
    </div>
  );
};

export default CustomCursor;