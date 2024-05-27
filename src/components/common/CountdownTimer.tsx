import { FC } from 'react';
import Countdown, { CountdownRendererFn } from 'react-countdown';

export interface ICountdownTimerProps {
  completed: boolean;
  onComplete: (isComplete: boolean) => void;
}

export const CountdownTimer: FC<ICountdownTimerProps> = ({
  completed: finished,
  onComplete,
}) => {
  const renderer: CountdownRendererFn = ({ minutes, seconds }) => {
    return finished ? (
      <span className='pr-6'>00:00</span>
    ) : (
      <span className='pr-6'>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    );
  };

  return (
    <Countdown
      date={Date.now() + 750000}
      renderer={renderer}
      onComplete={() => onComplete(true)}
    />
  );
};
