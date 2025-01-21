import React, { useState } from 'react';
import { MixedFraction } from '../../game-state';

interface DragDrop {
  mixedFraction: MixedFraction;
}

const DragDropComponent: React.FC<DragDrop> = ({ mixedFraction }) => {
  const [wholeItem, setWholeItem] = useState<string | null>(null);
  const [fractionItem, setFractionItem] = useState<string | null>(null);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, type: 'whole' | 'fraction') => {
    const data =
      type === 'whole'
        ? mixedFraction.whole.toString()
        : `${mixedFraction.numerator}/${mixedFraction.denominator}`;
    e.dataTransfer.setData('text/plain', data);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, target: 'whole' | 'fraction') => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');

    if (target === 'whole') {
      setWholeItem(data); 
    } else {
      setFractionItem(data);
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (

    <div>
      <div className="flex h-[717px] p-6 m-[64px]">
        {/* Draggable Section */}
        <div className="bg-pink-100  w-[40%] flex flex-col items-center justify-center">
          <div className='flex items-center gap-4 py-36'>
            <div
              draggable
              onDragStart={(e) => onDragStart(e, 'whole')}
              className="w-[82px] h-[100px] shadow-[-5px_5px_0px_0px_rgba(0,0,0)] bg-white border-2 border-black  flex items-center justify-center mb-4 cursor-grab text-green-600 text-7xl font-normal"
            >
              {mixedFraction.whole}
            </div>
            <div
              draggable
              onDragStart={(e) => onDragStart(e, 'fraction')}
              className="w-[82px] h-[210px] shadow-[-5px_5px_0px_0px_rgba(0,0,0)] text-purple-600 font-normal bg-white border-2 border-black  flex flex-col items-center justify-center cursor-grab"
            >
              <span className="text-7xl border-b-4 px-4 py-2 border-black ">{mixedFraction.numerator}</span>
              <span className="text-7xl px-4 py-2">{mixedFraction.denominator}</span>
            </div>
          </div>
          <p className="text-pink-600 text-[42px] font-normal mt-4">Pick from here</p>
        </div>

        {/* Drop Zones */}
        <div className="flex flex-col items-center justify-center gap-3 bg-white w-[60%] px-20 py-8">
          <div
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, 'whole')}
            className="border-2  border-green-500 rounded-lg w-full h-[210px] flex-col items-center justify-center text-green-500 font-normal p-4"
          >
            <p className="w-full text-left mb-2 text-[42px]">WHOLES</p>
            {wholeItem && (
              <div
                className="w-[82px] p-4 text-center mx-auto h-[100px] shadow-[-5px_5px_0px_0px_rgba(0,0,0)] bg-white border-2 border-black  mb-4 cursor-grab text-green-600 text-7xl font-normal"
              >
                {wholeItem}
              </div>
            )}
          </div>

          <div className="text-center font-normal text-5xl">+</div>

          <div
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, 'fraction')}
            className="border-2 border-purple-500 rounded-lg w-full h-[210px] flex-col items-center justify-center text-purple-500 font-normal p-4"
          >
            <p className="w-full text-left text-[42px] mb-2">FRACTION</p>
            {fractionItem && (
              <div
                className="w-fit p-4 h-[100px] shadow-[-5px_5px_0px_0px_rgba(0,0,0)] bg-white border-2 border-black mx-auto text-center mb-4 cursor-grab text-purple-500 text-7xl font-normal"
              >
                {fractionItem}
              </div>
            )}
          </div>
          <p className="text-pink-600 text-[42px] font-normal mt-4">drop here</p>
        </div>
      </div>
      {wholeItem && fractionItem && (
        <div className="w-fit p-8 mx-auto text-6xl flex items-center justify-center gap-4 bg-white m-[64px]">

          <div className="flex items-center gap-4 text-pink-500">
            <span>{mixedFraction.whole}</span>
            <div className="w-[52px] flex flex-col items-center justify-center text-center">
              <span className="w-full border-b-4 border-black">{mixedFraction.numerator}</span>
              <span>{mixedFraction.denominator}</span>
            </div>
          </div>

          <span className="m-5 text-pink-500">=</span>

          <div className='flex items-center text-green-500'>
            {mixedFraction.whole} wholes
          </div>

          <span className="m-5 text-pink-500">+</span>

          <div className="w-[52px] flex flex-col items-center justify-center text-center text-purple-500">
            <span className="w-full border-b-4 border-black">{mixedFraction.numerator}</span>
            <span>{mixedFraction.denominator}</span>
          </div>
          
          <p className='text-purple-500'>fraction</p>
        </div>
      )}
    </div>
  );
};

export default DragDropComponent;
