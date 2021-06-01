import { takeEvery, put, call, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { PayloadAction } from 'redux-starter-kit';
import { actions as IntakeActions } from './reducer';





function* apiErrorReceived(action: PayloadAction<any>) {
    yield call(toast.error, `Error Received: ${action.payload.error}`);
  }
  
  export default function* watchApiError() {
    yield takeEvery(IntakeActions.intakeApiErrorReceived.type, apiErrorReceived);
  }