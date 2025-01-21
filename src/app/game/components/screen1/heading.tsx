import React from 'react';


export default function Heading({ text }: { text: string }) {
  return (
    <div className='flex justify-center items-center m-[64px]'>
      <h1 className="w-[697px] h-[115px] flex justify-center items-center border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0)]  text-[45px] text-black bg-[rgb(236,255,64)] font-normal">
        {text}
      </h1>
    </div>

  );
}
