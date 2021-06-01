import './App.css';
import Header from './components/Header';
import Simulator from './features/Simulator/Simulator';
import Food from './features/Food/Food';
import Intake from './features/Intake/Intake'
import createStore from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore();

function App() {
  return (
    <Provider store={store}> 
      <Header />
      <Food />
      <ToastContainer />
      <Intake />
      {/* <Simulator /> */}

    </Provider>
  );
}

export default App;
