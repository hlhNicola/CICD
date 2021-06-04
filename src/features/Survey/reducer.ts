import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface surveyState {
    complete: boolean
}

const initialState:surveyState = {
 complete: false
};


const slice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    surveyCompleted: (state, action: PayloadAction<any>) => {
      state.complete = true
    },
    surveyApiErrorReceived: (state, action: PayloadAction<any>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;