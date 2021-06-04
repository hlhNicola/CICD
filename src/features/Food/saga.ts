import { takeEvery, put, call, select } from 'redux-saga/effects';
import { getFoodOptions, getFooditems } from './api'
import { toast } from 'react-toastify';
import * as selectors from './selectors';
import { PayloadAction } from 'redux-starter-kit';
import { actions as FoodActions } from './reducer';



function* foodOptionsRecieved(action: PayloadAction<any>): any {
  const optionInput = yield select(selectors.getOptionInput);
  try {
    const optionsData = yield call(getFoodOptions, optionInput);
    if(optionsData.data.length === 0){
      const errorMessage = 'Your input is not valid, please try another food'
      yield put(FoodActions.foodApiErrorReceived({error: errorMessage}));
    }
    yield put(FoodActions.foodOptionsReceived(optionsData.data));
  }
  catch(error) {
    yield put(FoodActions.foodApiErrorReceived(error));
  }
  
}

function* foodItemRecieved(action: PayloadAction<any>): any {
  const foodItem = yield select(selectors.getFoodItem);
  try {
    const foodItemData = yield call(getFooditems, foodItem);
    yield put(FoodActions.foodItemsReceived(foodItemData.data));
  }
  catch(error) {
    yield put(FoodActions.foodApiErrorReceived(error));
  }
}

function* apiErrorReceived(action: PayloadAction<any>) {
  yield call(toast.error, `Error Received: ${action.payload.error}`);
}

export default function* watchFood() {
  yield takeEvery(FoodActions.foodAutoCompleteRequest.type, foodOptionsRecieved);
  yield takeEvery(FoodActions.fooditemsRequest.type, foodItemRecieved);
  yield takeEvery(FoodActions.foodApiErrorReceived.type, apiErrorReceived);
}