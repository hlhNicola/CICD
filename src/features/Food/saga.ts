import { takeEvery, put, call, select } from 'redux-saga/effects';
import { getFoodOptions, getFooditems } from './api'
// import { toast } from 'react-toastify';
import * as selectors from './selectors';
import { PayloadAction } from 'redux-starter-kit';
import { actions as FoodActions } from './reducer';



function* foodOptionsRecieved(action: PayloadAction<any>): any {
  const optionInput = yield select(selectors.getOptionInput);
  const optionsData = yield call(getFoodOptions, optionInput);
  yield put(FoodActions.foodOptionsReceived(optionsData.data))
}

function* foodItemRecieved(action: PayloadAction<any>): any {
  const foodItem = yield select(selectors.getFoodItem);
  const foodItemData = yield call(getFooditems, foodItem);
  yield put(FoodActions.foodItemsReceived(foodItemData.data))
}

export default function* watchFood() {
  yield takeEvery(FoodActions.foodAutoCompleteRequest.type, foodOptionsRecieved)
  yield takeEvery(FoodActions.fooditemsRequest.type, foodItemRecieved)
}