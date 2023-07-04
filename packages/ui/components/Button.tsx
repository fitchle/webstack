import React from 'react';

type User = {
  name: string;
};

export const Button: React.FC = () => {
  return (
    <button className='p-4 px-12 rounded-xl bg-fitchle-brand text-white font-bold hover:bg-fitchle-brand2 transition-colors duration-500'>Example Button</button>
  );
};
