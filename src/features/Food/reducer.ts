import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface foodState {
  foodInfo: [];
  input: string;
  options: string[];
  foodItem: string;
}

const initialState:foodState = {
  foodInfo: [],
  input: 'apple',
  options:['apple'],
  foodItem: 'apple'
 
};


const slice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    foodAutoCompleteRequest: (state, action: PayloadAction<string>) => {
      state.input = action.payload
    },
    foodOptionsReceived: (state, action: PayloadAction<string[]>) => {
      state.options = action.payload
    },
    fooditemsRequest: (state, action: PayloadAction<string>) => {
      console.log(1)
      state.foodItem = action.payload
    },
    foodItemsReceived: (state, action: PayloadAction<any>) => {
      state.foodInfo = action.payload
    },
    foodApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;