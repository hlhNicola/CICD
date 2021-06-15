import { IState } from '../../store';

export const getSurveyStatus = (state: IState) => state.survey.complete;
export const getSurveyWeight = (state: IState) => state.survey.weight;
export const getSurveyAge = (state: IState) => state.survey.age;
export const getSurveyBust = (state: IState) => state.survey.bust;
export const getSurveyShape = (state: IState) => state.survey.shape;