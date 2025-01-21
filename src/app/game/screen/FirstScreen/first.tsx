import { useGameState } from '../../state-utils';
import Screen1Step0 from './Step0';
import Screen1Step1 from './Step1';
import Screen1Step2 from './Step2';
import Screen1Step3 from './Step3';


export default function FirstScreen() {
  const { gameStateRef, setGameStateRef } = useGameState();

  if (gameStateRef.current.state1.step == 0) {
    return (
      <Screen1Step0/>
    )
  }

  if (gameStateRef.current.state1.step === 1) {
    return (
      <Screen1Step1/>
    )
  }

  if (gameStateRef.current.state1.step === 2) {
    return (
      <Screen1Step2/>
    )
  }

  if (gameStateRef.current.state1.step === 3) {
    return (
      <Screen1Step3/>
    )
  }
}