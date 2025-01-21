interface StepModuleProps {
  stepNumber: number;
  stepText: string;
}

export default function StepHeadingBox({ stepNumber, stepText }: StepModuleProps) {
  return (
    <div className="flex items-stretch justify-center gap-4 m-[64px]">
      <div className="w-[160px] h-[100px]  bg-white flex items-center justify-center text-[42px] font-normal border-[10px] border-pink-500">
        <h2 className="text-pink-500 font-normal">Step {stepNumber}</h2>
      </div>
      <div className="w-[600px] h-[100px] text-white flex items-center justify-left text-[42px] p-5 bg-pink-500">
        <h2>{stepText}</h2>
      </div>
    </div>
  )
}
