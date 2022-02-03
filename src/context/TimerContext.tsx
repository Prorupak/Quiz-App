/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

export type TimerContextType = {
    time: string;
    onClickReset: () => void;
}


export const TimerContext = React.createContext<Partial<TimerContextType>>({
    time: '',
    onClickReset: () => { },
});

export const useTimerContext = () => React.useContext(TimerContext);

