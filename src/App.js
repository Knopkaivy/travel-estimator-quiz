import React, { useCallback, useEffect, useMemo } from 'react';
import { Context } from './context';
import Form from './components/Form';
import { scroller } from 'react-scroll';
import Start from './components/Start';
import Confirmation from './components/Confirmation';
import './styles/global.css';
import './styles/App.css';

function App() {
  const scrollToNext = useCallback((next) => {
    scroller.scrollTo(next, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
    setTimeout(() => {
      const newEl = document.querySelector(`#${next}`);
      if (next === 'budget' || next === 'season') {
        newEl.firstChild.focus();
      } else {
        newEl.focus();
      }
    }, 1600);
  }, []);

  const contextValue = useMemo(() => scrollToNext, [scrollToNext]);

  useEffect(() => {
    scroller.scrollTo('start', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }, []);
  return (
    <Context.Provider value={contextValue}>
      <div className="App">
        <Start scrollToNext={scrollToNext} />
        <Form scrollToNext={scrollToNext} />
        <Confirmation scrollToNext={scrollToNext} />
      </div>
    </Context.Provider>
  );
}

export default App;
