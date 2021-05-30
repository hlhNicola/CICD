import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface orderState {
  data:any
}



const initialState:orderState = {
  data:[]
};


const slice = createSlice({
  name: 'intake',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      state.data = action.payload
    },
    reduceItem: (state, action: PayloadAction<string>) => {
        state.data = action.payload
      },
    orderApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;