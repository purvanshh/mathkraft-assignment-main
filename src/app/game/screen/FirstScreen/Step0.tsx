import LevelBox from "../../components/levelbox";
import NextStepBox from "../../components/nextstepbox";
import Heading from "../../components/screen1/heading";
import { useGameState } from "../../state-utils";

export default function Screen1Step0() {

  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;

  return (
    <div className="mx-auto">
      <Heading text="Mixed number to improper fraction" />
      <LevelBox mixedFraction={mixedFraction} />
      <NextStepBox text="START >>" nextStep={() => {
        setGameStateRef({ ...gameStateRef.current, state1: { ...gameStateRef.current.state1, step: 1 } });
      }} />
    </div>
  );
}