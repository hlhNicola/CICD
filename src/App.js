import './App.css';
import Header from './components/Header';
import Simulator from './features/Simulator/Simulator';
import Food from './features/Food/Food';
import Intake from './features/Intake/Intake'
import createStore from './store';
import { Provider } from 'react-redux';

const store = createStore();

function App() {
  return (
    <Provider store={store}> 
      <Header />
      <Food />
      <Intake />
      {/* <Simulator /> */}

    </Provider>
  );
}

export default App;
