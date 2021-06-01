import { IState } from '../../store';

export const getSelectedItems = (state: IState) => state.intake.data;
export const getTotalCalories = (state: IState) => state.intake.calorie;


