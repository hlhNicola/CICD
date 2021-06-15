import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface surveyState {
    complete: boolean,
    age: string,
    weight: number
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
      state.age = 'AG' + action.payload.age
      state.weight = action.payload.weight
    },
    surveyApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;