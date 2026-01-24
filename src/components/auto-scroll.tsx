'use client';

import { useEffect } from 'react';

interface AutoScrollProps {
  targetId: string;
}

export const AutoScroll = ({ targetId }: AutoScrollProps) => {
  useEffect(() => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [targetId]);

  return null;
};
