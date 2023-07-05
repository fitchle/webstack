import React from 'react';

type User = {
  name: string;
};

export const StorybookButton = (props: {text: string, href: string}) => {
  return (
    <div className="place-items-center place-self-center lg:place-self-end">
    <a href={props.href} target="_blank" className="bg-rose-600 font-bold p-4 px-8 rounded-xl text-white border-white border-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300">{props.text}</a>
  </div>  );
};
