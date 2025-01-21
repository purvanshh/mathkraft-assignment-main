import { MixedFraction } from '../game-state';

interface HeaderProps {
  mixedFraction: MixedFraction;
}


const LevelBox = ({ mixedFraction }: HeaderProps) => {
  return (
    <div className='flex justify-center items-center m-[64px]'>
      <div className="w-[745px] h-[253px] flex items-center justify-center bg-white text-[64px] font-normal">
        <div className="w-[253px] h-full bg-white border-[15px] flex items-center justify-center border-pink-500">
          <h2 className="text-pink-500">Level 1</h2>
        </div>

        <div className="w-[496px] h-[253px] flex items-center justify-center gap-4 border-[15px] border-pink-500 border-l-0">

          <div className="flex items-center gap-4">
            <span>{mixedFraction.whole}</span>
            <div className="w-[52px] flex flex-col items-center justify-center text-center">
              <span className="w-full border-b-4 border-black">{mixedFraction.numerator}</span>
              <span>{mixedFraction.denominator}</span>
            </div>
          </div>

          <span className="m-5">=</span>

          <div className="w-[52px] flex flex-col items-center justify-center text-center">
            <span className="w-full border-b-4 border-black">?</span>
            <span>?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelBox;