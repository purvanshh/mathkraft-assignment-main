"use client"

import React, { useState } from 'react'

interface PizzaSlicesProps {
  size?: string;
  denominator: number;
  clickedSlices: boolean[];
  setClickedSlices: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const PizzaSlicesSelect: React.FC<PizzaSlicesProps> = ({
  denominator,
  size,
  clickedSlices,
  setClickedSlices,
}) => {

  const handleSliceClick = (index: number) => {
    const newClickedSlices = [...clickedSlices];
    newClickedSlices[index] = !newClickedSlices[index];
    setClickedSlices(newClickedSlices);
  };

  const generateSlices = () => {
    const slices = [];
    const angleStep = 360 / denominator;
    for (let i = 0; i < denominator; i++) {
      const startAngle = i * angleStep;
      const endAngle = (i + 1) * angleStep;
      const largeArcFlag = angleStep > 180 ? 1 : 0;
      const x1 = 50 + 45 * Math.cos((startAngle * Math.PI) / 180);
      const y1 = 50 + 45 * Math.sin((startAngle * Math.PI) / 180);
      const x2 = 50 + 45 * Math.cos((endAngle * Math.PI) / 180);
      const y2 = 50 + 45 * Math.sin((endAngle * Math.PI) / 180);

      slices.push(
        <path
          key={i}
          d={`M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
          fill={clickedSlices[i] ? "#98d400" : "white"}
          stroke="#618700"
          strokeWidth="1"
          onClick={() => handleSliceClick(i)}
        />
      );
    }
    return slices;
  };

  return (
    <div className="">
      <div className="flex flex-col items-center space-y-4">
        <svg viewBox="0 0 100 100" className={size === 'lg' ? 'w-72 h-72' : size === 'sm' ? 'w-52 h-52' : 'w-60 h-60'}>
          <circle cx="50" cy="50" r="45" fill="#d3ea00" stroke="#ffffff" strokeWidth="1" />
          {generateSlices()}
        </svg>
      </div>
    </div>
  );
}

export default PizzaSlicesSelect;
