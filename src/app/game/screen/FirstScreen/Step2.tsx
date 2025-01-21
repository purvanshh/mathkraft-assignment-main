import LevelBox2 from "../../components/levelbox2";
import SliceCutter from "../../components/screen1/slicecutter";
import StepHeadingBox from "../../components/screen1/stepheadingbox";
import { useGameState } from "../../state-utils";

export default function Screen1Step2() {

  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;

  return (
    <div className="mx-auto">
      <LevelBox2 heading='Level 1' mixedFraction={mixedFraction} stepNumber={2} emoji='😀'/>
      <StepHeadingBox stepNumber={2} stepText='Wholes to Fractions' />
      <SliceCutter mixedFraction={mixedFraction} />
    </div>
  );
}