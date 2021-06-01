import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface intakeState {
  data:any,
  calorie: number
}

const initialState:intakeState = {
  data:[],
  calorie: 0
};

const slice = createSlice({
  name: 'intake',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      state.data = state.data.concat(action.payload)
      state.calorie = state.data.reduce((a: number, b: any) => {
        return a + b.ENERC_KCAL
      }, 0)
    },
    reduceItem: (state, action: PayloadAction<string>) => {
      state.data.splice(action.payload, 1)
      state.calorie = state.data.reduce((a: number, b: any) => {
        return a + b.ENERC_KCAL
      }, 0)
    },
    intakeApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;