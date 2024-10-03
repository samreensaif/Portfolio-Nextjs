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
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-6 bg-red-800 border border-gray-200">
        <Image 
          src={props.imageSrc} 
          alt="Card Image" 
          width={300}  
          height={300}
          
        />
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white text-center">{props.heading}</h2>
        </div>
        <p className="text-white text-center mb-4">{props.description}</p>
      </div>
    </>
  );
}

export default Card;
