import LevelBox2 from "../../components/levelbox2";
import NextStepBox from "../../components/nextstepbox";
import DragDropComponent from "../../components/screen1/dragdrop";
import StepHeadingBox from "../../components/screen1/stepheadingbox";
import { useGameState } from "../../state-utils";

export default function Screen1Step1() {

  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;

  return (
    <div className="mx-auto">
      <LevelBox2 heading='Level 1' mixedFraction={mixedFraction} stepNumber={1} emoji='🤔'/>
      <StepHeadingBox stepNumber={1}  stepText='Sum of WHOLES & FRACTIONS' />
      <DragDropComponent mixedFraction={mixedFraction} />
      <NextStepBox text="STEP 2 >>" nextStep={() => {
        setGameStateRef({ ...gameStateRef.current, state1: { ...gameStateRef.current.state1, step: 2 } });
      }} />
    </div>
  );
}