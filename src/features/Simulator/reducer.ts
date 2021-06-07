import { createSlice, PayloadAction } from 'redux-starter-kit';
export interface simulatorState {
  targetWeight: number;
  beforeImage: string;
  afterImage: string;
}

const initialState:simulatorState = {
  targetWeight: 0,
  beforeImage: '',
  afterImage: ''
};

const slice = createSlice({
  name: 'simulator',
  initialState,
  reducers: {
    simulatorDataRecevied: (state, action: PayloadAction<any>) => {
      state.targetWeight = action.payload
    },
    imageDataReceived:  (state, action: PayloadAction<any>) => {
      state.beforeImage = action.payload.current
      state.afterImage = action.payload.goal
    },
    simulatorApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;