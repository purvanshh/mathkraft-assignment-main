import React from 'react';

interface NextStepBoxProps {
  text: string;
  nextStep?: () => void;
}


export default function NextStepBox({ text, nextStep }: NextStepBoxProps) {
  return (
    <div className='flex justify-center items-center m-[64px]'>
      <button className="w-[290px] h-[121px] flex justify-center items-center border-[15px] border-pink-500 shadow-[-5px_5px_0px_0px_rgba(0,0,0)]  text-[47px] text-pink-500 bg-white font-normal" onClick={nextStep}>
        {text}
      </button>
    </div>

  );
}
