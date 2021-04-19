import { createSlice, PayloadAction } from 'redux-starter-kit';

const initialState = {
  data: []
 
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