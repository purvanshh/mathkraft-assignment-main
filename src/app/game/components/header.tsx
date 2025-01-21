import React from 'react';
import { MixedFraction } from '../game-state';

interface HeaderProps {
  mixedFraction: MixedFraction;
}

export default function Header({ mixedFraction } : HeaderProps) {
  return (
    <div className="w-full bg-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Game Header</h1>
      </div>
      <div className="text-lg">
          {mixedFraction.whole} {mixedFraction.numerator}/{mixedFraction.denominator}
      </div>
    </div>
  );
}
