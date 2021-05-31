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
      state.data = state.data.concat(action.payload)
    },
    reduceItem: (state, action: PayloadAction<string>) => {
      console.log('index', action.payload)
        state.data.splice(action.payload, 1)
      },
    orderApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;