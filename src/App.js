import Form from './components/Form';
import './styles/global.css';
import './styles/App.css';
import Start from './components/Start';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div className="App">
      <Start />
      <Form />
      <Confirmation />
    </div>
  );
}

export default App;
