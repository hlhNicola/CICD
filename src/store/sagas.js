import { spawn } from 'redux-saga/effects';
import simulatorSaga from '../features/Simulator/saga';
import foodSaga from '../features/Food/saga';
import intakeSaga from '../features/Intake/saga';

export default function* root() {
  yield spawn(simulatorSaga);
  yield spawn(foodSaga);
  yield spawn(intakeSaga);
}
