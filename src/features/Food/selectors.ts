import { IState } from '../../store';

export const getOptionInput = (state: IState) => state.food.input;
export const getOptions = (state: IState) => state.food.options;
export const getFoodItem = (state: IState) => state.food.foodItem;
export const getFoodInfo = (state: IState) => state.food.foodInfo;

