import './App.css';
import Header from './components/Header';
import Simulator from './features/Simulator/Simulator';
import Food from './features/Food/Food';
import Intake from './features/Intake/Intake'
import createStore from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StartSurvey from './features/Survey/survey';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getSurveyStatus } from './features/Survey/selectors';
import { useSelector } from 'react-redux';

const store = createStore();

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path="/">
            <Header />
            <Food />
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
