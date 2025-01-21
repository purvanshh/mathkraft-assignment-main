"use client"

import React from 'react'

interface PizzaSlicesProps {
  numerator: number;
  size?: string;
  denominator: number;
}

const PizzaSlices: React.FC<PizzaSlicesProps> = ({
  numerator,
  denominator,
  size
}) => {
  const generateSlices = () => {
    const slices = []
    const angleStep = 360 / denominator
    for (let i = 0; i < denominator; i++) {
      const startAngle = i * angleStep
      const endAngle = (i + 1) * angleStep
      const largeArcFlag = angleStep > 180 ? 1 : 0
      const x1 = 50 + 45 * Math.cos((startAngle * Math.PI) / 180)
      const y1 = 50 + 45 * Math.sin((startAngle * Math.PI) / 180)
      const x2 = 50 + 45 * Math.cos((endAngle * Math.PI) / 180)
      const y2 = 50 + 45 * Math.sin((endAngle * Math.PI) / 180)

      slices.push(
        <path
          key={i}
          d={`M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
          fill={i <= numerator ? "#98d400" : "none"}
          stroke="#ffffff"
          strokeWidth="1"
        />
      )
    }
    return slices
  }

  return (
    <div className="">
      <div className="flex flex-col items-center space-y-4">
        <svg viewBox="0 0 100 100" className={size === 'lg' ? 'w-80 h-80' : size === 'sm' ? 'w-52 h-52' : 'w-60 h-60'}>
          <circle cx="50" cy="50" r="45" fill="#d3ea00" stroke="#ffffff" strokeWidth="1" />
          {generateSlices()}
        </svg>
      </div>
    </div>
  )
}

export default PizzaSlices
