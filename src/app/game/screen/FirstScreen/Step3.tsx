import { use, useRef, useState } from "react";
import LevelBox2 from "../../components/levelbox2";
import PizzaSlicesSelect from "../../components/screen1/pizzaselect";
import PizzaSlices from "../../components/screen1/pizzaslice";
import StepHeadingBox from "../../components/screen1/stepheadingbox";
import SuccessAnimation from "../../components/successanimation";
import { useGameState } from "../../state-utils";

export default function Screen1Step3() {

  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;
  const [ done, setDone ] = useState(false);
  const topPage = useRef<HTMLDivElement>(null);
  const [clickedSlices, setClickedSlices] = useState<boolean[]>(Array(mixedFraction.denominator).fill(false));
  

  function handleDone() {
    const trueCount = clickedSlices.filter(Boolean).length;
    if (trueCount == mixedFraction.numerator) {
      setDone(prev => !prev);
      if (topPage.current) {
        topPage.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <div ref={topPage} className="mx-auto">
      <LevelBox2 heading='Level 1' mixedFraction={mixedFraction} stepNumber={3} emoji='🤩' />
      <StepHeadingBox stepNumber={3} stepText='Add the fractions' />

      <div className="flex justify-center items-strech m-[64px] w-[90%] border border-black">
        <div className="p-4 flex justify-center items-center gap-4 w-[60%] bg-white py-44 max-h-full">
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-wrap bg-white">
              {Array.from({ length: mixedFraction.whole }, (_, index) => (
                <PizzaSlices key={index} numerator={mixedFraction.denominator} denominator={mixedFraction.denominator} size="sm" />
              ))}
            </div>
            <Bracket numerator={mixedFraction.whole * mixedFraction.denominator} denominator={mixedFraction.denominator} />
          </div>
          <div className="text-[84px]">+</div>
        </div>

        <div className="flex-col justify-center content-center items-center w-[40%] bg-[#ffd9d9] border-l border-black max-h-full">
          <div className="text-center text-[52px] text-pink-500 py-2">
            Select {mixedFraction.numerator}/{mixedFraction.denominator}ths here
          </div>
          <div className="py-4">
            <PizzaSlicesSelect denominator={mixedFraction.denominator} clickedSlices={clickedSlices} setClickedSlices={setClickedSlices} size="lg" />
          </div>
          <div className="mx-20">
            <Bracket numerator={mixedFraction.numerator} denominator={mixedFraction.denominator} />
          </div>
          <button className="w-[208px] mx-auto h-[73px] m-10 flex justify-center items-center shadow-[-5px_5px_0px_0px_rgba(0,0,0)] text-[44px] text-white bg-pink-500 font-normal"
            onClick={handleDone}>
            Done
          </button>
        </div>
      </div>

      {done && <SuccessAnimation />}
    </div>
  );
}

function Bracket({ numerator, denominator }: { numerator: number, denominator: number }) {

  return (
    <div className="flex justify-center items-start gap-4 py-4">
      <div className="border-l-4 border-b-8 border-black w-full h-9 mt-4"></div>
      <div className="text-[45px] flex flex-col items-center justify-center text-center bg-white px-4">
        <span className="w-full px-3 border-b border-black">{numerator}</span>
        <span>{denominator}</span>
      </div>
      <div className="border-r-4 border-b-8 border-black w-full h-9 mt-4"></div>
    </div>
  )
}