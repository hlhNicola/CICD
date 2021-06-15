import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface surveyState {
    complete: boolean,
    age: string,
    weight: number,
    bust?: string,
    shape?: string
}

const initialState:surveyState = {
 complete: false,
 age: '',
 weight: 0
};

const slice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    surveyCompleted: (state, action: PayloadAction<any>) => {
      state.complete = true
      console.log(action.payload)
      state.age = 'AG' + action.payload.age
      state.weight = action.payload.weight
      state.shape = action.payload.shape.toLowerCase()
      let bust = ''
      if(action.payload.bust){
        bust = action.payload.bust === "Small-Medium" ? 'small' : 'large'
      }
      state.bust = bust
    },
    surveyApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;