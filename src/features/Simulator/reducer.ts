import { createSlice, PayloadAction } from 'redux-starter-kit';
export interface simulatorState {
  currentWeight: number;
  targetWeight: number;
}

const initialState:simulatorState = {
  currentWeight: 0,
  targetWeight: 0,
};



const slice = createSlice({
  name: 'simulator',
  initialState,
  reducers: {
    simulatorDataRecevied: (state, action: PayloadAction<any>) => {
      
    },
    simulatorApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;