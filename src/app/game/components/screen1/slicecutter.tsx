import { useState, useRef } from "react";
import { MixedFraction } from "../../game-state";
import slicer1 from "../../assets/slicer1.png";
import slicer2 from "../../assets/slicer2.png";
import slicer3 from "../../assets/slicer3.png";
import { useGameState } from "../../state-utils";
import PizzaSlices from "./pizzaslice";
import NextStepBox from "../nextstepbox";

export default function SliceCutter({ mixedFraction }: { mixedFraction: MixedFraction }) {
  const { gameStateRef, setGameStateRef } = useGameState();
  const [selectedSlicer, setSelectedSlicer] = useState<number>(0);
  const [pieces, setPieces] = useState<number | null>(null);
  const [nextStep, setNextStep] = useState<boolean>(false);
  const pizzaSlicesRef = useRef<HTMLDivElement>(null);

  const handleSlicerClick = (slicer: number) => {
    setSelectedSlicer(slicer);
    if (pizzaSlicesRef.current) {
      pizzaSlicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePieces = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPieces(parseInt(e.target.value));
  };

  return (
    <div>
      <div ref={pizzaSlicesRef} className="flex justify-center items-center flex-wrap space-x-4 w-[90%] mx-auto bg-white p-8">
        {Array.from({ length: mixedFraction.whole }, (_, index) => (
          <PizzaSlices key={index} numerator={selectedSlicer} denominator={selectedSlicer} />
        ))}
      </div>

      {!nextStep && <div className="flex-col justify-center items-center w-[70%] mx-auto  m-[64px]">
        <div className="font-normal text-[40px] text-black text-center mx-auto p-8">
          Chose your slicer
        </div>
        <div className="flex justify-between items-center flex-wrap gap-10 bg-white p-10 border border-black rounded-md">
          <div className="flex gap-4">
            <div className="h-[409px] p-4 flex flex-col items-center justify-center border border-black rounded-md">
              <img
                className=''
                src={slicer1.src}
                alt="slicer 1"
                onClick={() => handleSlicerClick(mixedFraction.whole)}
              />
              <div className="w-[80%] my-8 h-0 border-t border-black"></div>
              <img
                className=''
                src={slicer2.src}
                alt="slicer 2"
                onClick={() => handleSlicerClick(mixedFraction.whole - 1)}
              />
              <div className="w-[80%] my-8 h-0 border-t border-black"></div>
              <img
                className=''
                src={slicer3.src}
                alt="slicer 3"
                onClick={() => handleSlicerClick(mixedFraction.whole + 1)}
              />
            </div>
            <div className="text-[33px] text-left text-sky-800">
              <h1
                className={`cursor-pointer px-4 py-12 ${selectedSlicer === mixedFraction.whole ? "text-pink-500" : ""}`}
                onClick={() => handleSlicerClick(mixedFraction.whole)}
              >
                Slices the pies in {mixedFraction.whole} pieces
              </h1>
              <h1
                className={`cursor-pointer px-4 py-10 ${selectedSlicer === mixedFraction.whole - 1 ? "text-pink-500" : ""}`}
                onClick={() => handleSlicerClick(mixedFraction.whole - 1)}
              >
                Slices the pies in {mixedFraction.whole - 1} pieces
              </h1>
              <h1
                className={`cursor-pointer px-4 py-12 ${selectedSlicer === mixedFraction.whole + 1 ? "text-pink-500" : ""}`}
                onClick={() => handleSlicerClick(mixedFraction.whole + 1)}
              >
                Slices the pies in {mixedFraction.whole + 1} pieces
              </h1>
            </div>
          </div>
          <button
            className="w-[208px] h-[73px] m-10 flex justify-center items-center shadow-[-5px_5px_0px_0px_rgba(0,0,0)] text-[44px] text-white bg-pink-500 font-normal"
            onClick={() => {
              if (selectedSlicer === mixedFraction.denominator) {
                setNextStep(true);
              }
            }}
          >
            Slice
          </button>
        </div>
      </div>}

      {nextStep && <div className="flex-col justify-center items-center w-[70%] mx-auto m-[64px]">
        <div className="text-center text-[43px] text-black font-normal flex items-center justify-center gap-4">
          <span>So there are </span>
          <input className="border-black border rounded-sm w-[60px] h-[60px] appearance-none text-center" type="number" value={pieces} onChange={handlePieces}></input>
          <div className="w-[52px] flex flex-col items-center justify-center text-center">
            <span className="w-full border-b-4 border-black">{mixedFraction.numerator}</span>
            <span>{mixedFraction.denominator}</span>
          </div>
          <span>sized pieces in {mixedFraction.whole} wholes</span>
        </div>

        <div className="w-[731px] flex-col justify-center items-center mx-auto p-4 text-[45px] m-[64px]">
          <div className="font-normal  bg-lime-200 text-black text-center mx-auto p-3 rounded-t-sm">
            AWSOME
          </div>
          <div className="h-[200px] flex justify-center items-center text-center gap-4 mx-auto  bg-[#f6f4c5] rounded-b-sm">
            <span>3 wholes =</span>
            <div className="w-[100px] flex flex-col items-center justify-center text-center">
              <input className="border-black border rounded-sm w-[60px] h-[60px] appearance-none text-center" type="number" value={pieces} onChange={handlePieces}></input>
              <span className="border-b-2 border-black w-full py-2"></span>
              <span>{mixedFraction.denominator}</span>
            </div>
          </div>
        </div>

        <NextStepBox text="STEP 3 >>" nextStep={() => {
          if (pieces === mixedFraction.denominator * mixedFraction.whole)
            setGameStateRef({ ...gameStateRef.current, state1: { ...gameStateRef.current.state1, step: 3 } });
        }} />
      </div>}
    </div>
  );
}