import { IState } from '../../store';

export const getTargetWeight = (state: IState) => state.simulator.targetWeight;
export const getBeforeImg = (state: IState) => state.simulator.beforeImage;
export const getAfterImg = (state: IState) => state.simulator.afterImage;