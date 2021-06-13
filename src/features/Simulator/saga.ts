import { postImages } from '../../services/api';
import { takeEvery, put, call, select } from 'redux-saga/effects';
import { actions as SimulatorActions } from './reducer';
import { PayloadAction } from 'redux-starter-kit';
import { toast } from 'react-toastify';
import * as selectors from './selectors';
import {getSurveyAge, getSurveyWeight} from '../Survey/selectors';

function* simulatorDataRecieved(action: PayloadAction<any>): any {
    const currentWeight = yield select(getSurveyWeight);
    const age = yield select(getSurveyAge);
    const targetWeight = yield select(selectors.getTargetWeight);
    try {
        const imageData = yield call(postImages, currentWeight, age, targetWeight)
        yield put(SimulatorActions.imageDataReceived(imageData.data))
    }
    catch(error) {
        yield put(SimulatorActions.simulatorApiErrorReceived(error))
    }
  }
  
function* apiErrorReceived(action: PayloadAction<any>) {
    yield call(toast.error, `Error Received: ${action.payload.error}`);
  }

export default function* watchSimulator() {
    yield takeEvery(SimulatorActions.simulatorDataRecevied.type, simulatorDataRecieved);
    yield takeEvery(SimulatorActions.simulatorApiErrorReceived.type, apiErrorReceived);
  }