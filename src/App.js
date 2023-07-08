import Form from './components/Form';
import * as Scroll from 'react-scroll';
import {
  Link,
  // Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import './styles/global.css';
import './styles/App.css';
import Start from './components/Start';
import Confirmation from './components/Confirmation';
import { useEffect } from 'react';

function App() {
  // const scrollToNext = (next) => {
  //   scroller.scrollTo(next, {
  //     duration: 1500,
  //     delay: 100,
  //     smooth: true,
  //   });
  // };
  useEffect(() => {
    scroller.scrollTo('start', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }, []);
  return (
    <div className="App">
      <Start />
      <Form />
      <Confirmation />
    </div>
  );
}

export default App;
