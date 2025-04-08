'use client';

import React, { useEffect, useState } from 'react';

const roles: string[] = [
  "Frontend Developer",
  "Backend Developer",
  "Virtual Assistant"
];

const TypingText: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(100);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];

    const handleTyping = () => {
      if (isDeleting) {
        setText(current.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(current.substring(0, text.length + 1));
        setSpeed(120);
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <h2 className="text-2xl md:text-2xl font-bold text-white pb-4">
      I'm a <span>{text}</span>
      <span className="border-r-4 border-blue-400 animate-pulse ml-1" />
    </h2>
  );
};

export default TypingText;
