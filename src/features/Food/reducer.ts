import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface foodState {
  foodInfo: any;
  input: string;
  options: string[];
  foodItem: string;
}

const initialState:foodState = {
  foodInfo: [],
  input: '',
  options:[],
  foodItem: ''
 
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
      state.foodItem = action.payload
    },
    foodItemsReceived: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      state.foodInfo = action.payload.hints.filter((item: any) => {
        return item.food.image
      }).map((item:any) => {
        item.food.nutrients = {label: item.food.label, ...item.food.nutrients}
        return item
      })
    },
    foodApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;