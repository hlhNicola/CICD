import { takeEvery, put, call, select } from 'redux-saga/effects';
import { getFoodOptions } from './api'
// import { toast } from 'react-toastify';
import * as selectors from './selectors';
import { PayloadAction } from 'redux-starter-kit';
import { actions as FoodActions } from './reducer';



function* apiOptionsRecieved(action: PayloadAction<any>): any {
    const optionInput = yield select(selectors.optionInput);
    const optionsData = yield call(getFoodOptions, optionInput);
    yield put(FoodActions.foodOptionsReceived(optionsData.data))
  }
  
  export default function* watchApiError() {
    yield takeEvery(FoodActions.foodAutoCompleteRequest.type, apiOptionsRecieved);
  }