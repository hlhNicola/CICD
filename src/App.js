import './App.css';
import Header from './components/Header';
import Simulator from './features/Simulator/Simulator';
import Food from './features/Food/Food';
import createStore from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const store = createStore();

function App() {
  return (
    <Provider store={store} >
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path="/CICD">
            <Header />
            <Food/>
          </Route>
          <Route exact path="/simulator">
            <Simulator />
          </Route>
        </Switch>
      </Router>
    </Provider>
    
  );
}

export default App;
