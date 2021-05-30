import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface foodState {
  foodInfo: any;
  input: string;
  options: string[];
  foodItem: string;
  currentWeight: number;
  targetWeight: number;
  calorie: number;
}

const initialState:foodState = {
  foodInfo: [],
  input: '',
  options:[],
  foodItem: '',
  currentWeight: 0,
  targetWeight: 0,
  calorie: 0
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
      const map = new Map()
      state.foodInfo = action.payload.hints.filter((item: any) => {
        if(!map.has(item.food.label)){
          map.set(item.food.label, 1)
        }
        else if(map.has(item.food.label)){
          return false
        }
        return item.food.image
      }).map((item:any) => {
        item.food.nutrients = {image: item.food.image, label: item.food.label, foodId: item.food.foodId, ...item.food.nutrients}
        return item
      })
    },
    foodApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;