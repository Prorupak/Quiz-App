import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPlay from './components/main/QuizPlay';
import { TimerContext } from './context/TimerContext';
import { useCountdownTimer } from './hooks/useCountdownTimer';
import { Home } from './pages';
function App() {
  const { time, onClickReset } = useCountdownTimer();
  return (
    <>
      <TimerContext.Provider value={{ time, onClickReset }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizPlay />} />
        </Routes>
      </BrowserRouter>
      </TimerContext.Provider>
    </>
  );
}

export default App;
