import { createSlice, PayloadAction } from 'redux-starter-kit';

const initialState = {
  data: [],
  input: '',
  options:[]
 
};


const slice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    foodAutoCompleteRequest: (state, action: PayloadAction<any>) => {
      state.input = action.payload
    },
    foodOptionsReceived: (state, action: PayloadAction<any>) => {
      state.options = action.payload
    },
    fooditemsRequest: (state, action: PayloadAction<any>) => {
      state.options = action.payload
    },
    foodItemsReceived: (state, action: PayloadAction<any>) => {
      state.data = action.payload
    },
    foodApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;