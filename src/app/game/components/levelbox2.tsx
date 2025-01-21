import { MixedFraction } from '../game-state';

interface HeaderProps {
  heading: string;
  emoji: string;
  mixedFraction: MixedFraction;
  stepNumber: number;
}

const LevelBox2 = ({ heading, mixedFraction, emoji, stepNumber }: HeaderProps) => {
  return (
    <div className="flex justify-center items-center m-[60px]">
      <div className="flex items-center justify-center bg-pink-500 rounded-[20px] border-[7px] border-pink-500 overflow-hidden relative">
        {/* Level section */}
        <div className="w-[150px] h-[150px] bg-pink-500 flex flex-col items-center justify-center text-[45px]  font-normal">
          <h2 className="text-white font-normal h-12"> {heading.split(' ')[0]}</h2>
          <h2 className="text-white font-normal"> {heading.split(' ')[1]}</h2>
        </div> {/* Level section */}

        {/* Fraction section */}
        <div className="w-fit pr-44 h-[150px] bg-white flex items-center justify-left text-[45px] px-8 rounded-l-[20px]">
          <div className="flex items-center gap-4">
            <span>{mixedFraction.whole}</span>
            <div className="w-[52px] flex flex-col items-center justify-center text-center">
              <span className="w-full border-b-4 border-black">{mixedFraction.numerator}</span>
              <span>{mixedFraction.denominator}</span>
            </div>
          </div>

          <span className="mx-8">=</span>

          {stepNumber && stepNumber === 1 && (
            <div className="w-[52px] flex flex-col items-center justify-center text-center">
              <span className="w-full border-b-4 border-black">?</span>
              <span>?</span>
            </div>
          )}

          {stepNumber && stepNumber === 2 && (
            <div className="flex items-center gap-4">
              <span>{mixedFraction.whole}</span>
              <span>+</span>
              <div className="w-[52px] flex flex-col items-center justify-center text-center">
                <span className="w-full border-b-4 border-black">{mixedFraction.numerator}</span>
                <span>{mixedFraction.denominator}</span>
              </div>
            </div>
          )}

          {stepNumber && stepNumber === 3 && (
            <div className="flex items-center gap-4">
              <div className="w-[52px] flex flex-col items-center justify-center text-center">
                <span className="w-full border-b-4 border-black">{mixedFraction.denominator * mixedFraction.whole}</span>
                <span>{mixedFraction.denominator}</span>
              </div>
              <span>+</span>
              <div className="w-[52px] flex flex-col items-center justify-center text-center">
                <span className="w-full border-b-4 border-black">{mixedFraction.numerator}</span>
                <span>{mixedFraction.denominator}</span>
              </div>
            </div>
          )}




        </div>

        {/* Emoji section */}
        <div className="w-[152px] h-[164px] border-[7px] border-r-0 border-pink-500 rounded-[20px] rounded-r-none bg-white flex items-center justify-center absolute right-0">
          <span className="text-[80px]">{emoji}</span>
        </div>
      </div>
    </div>
  );
};

export default LevelBox2;