import { spawn } from 'redux-saga/effects';
import simulatorSage from '../features/Simulator/saga';

export default function* root() {
  yield spawn(simulatorSage);
}
