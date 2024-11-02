"use client";

import React from 'react';
import Image from 'next/image';
interface CardProps {
  heading: string;
  description: string;
  imageSrc: string;  // Add imageSrc prop
}

function Card(props: CardProps) {
  console.log('props', props.heading);

  return (
    <>
      <div className="max-w-xs md:max-w-sm lg:max-w-md rounded-2xl overflow-hidden shadow-lg p-6 bg-[#c3b177] border border-red-800 transition-transform duration-500 hover:scale-105 mx-auto">
    <Image 
        src={props.imageSrc} 
        alt="Card Image" 
        width={200}  
        height={200}
        className="w-24 h-24 md:w-36 md:h-36 mb-4 mx-auto rounded-full"
    />
    <div className="mb-4 text-center">
        <h2 className="text-lg md:text-xl font-bold text-[#2c2c59]">{props.heading}</h2>
    </div>
    <p className="text-[#2c2c59] text-center mb-4">{props.description}</p>
</div>

    </>
  );
}

export default Card;
